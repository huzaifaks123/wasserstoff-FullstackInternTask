// import styles from style modules
import styles from '../styles/sidemenu.module.css';

// import outlet to change dom without reloading tab
import { Link, Outlet } from "react-router-dom";

// import hook for state
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataSelector, setFilters, resetFilters, DataAsyncThunk } from '../redux/reducers/DashboardReducer';

const SideMenu = ({ filterData }) => {

  const dispatch = useDispatch();
  const { filters } = useSelector(DataSelector);

  // defined necessory state for the sideMenu
  const [isCollapsed, setIsCollapsed] = useState([]);
  const [color, setColor] = useState("");
  const [checkedItems, setCheckedItems] = useState({});

  // apply react hook to render filter based on componnent mounting and update
  useEffect(() => {
    setCheckedItems({ ...filters });
  }, [filters]);

  // function to toggle tree
  const toggleTree = (name) => {
    setIsCollapsed((prevState) => {
      if (prevState.includes(name)) {
        return prevState.filter(item => item !== name);
      } else {
        return [...prevState, name];
      }
    });
  };

  // function to change logo color on hover since its not svg
  const changeLogo = (state) => {
    setColor(state);
  }

  // function to handle checkbox changes
  const handleFilter = (parent, node) => {
    setCheckedItems((prevState) => {
      const newCheckedItems = { ...prevState };
      if (newCheckedItems[parent]?.includes(node)) {
        newCheckedItems[parent] = newCheckedItems[parent].filter(item => item !== node);
      } else {
        if (!newCheckedItems[parent]) {
          newCheckedItems[parent] = [];
        }
        newCheckedItems[parent] = [...newCheckedItems[parent], node];
      }

      return newCheckedItems;
    });
  };

  // handle reset function to reset all filters
  const handleReset = () => {
    dispatch(resetFilters())
    setCheckedItems({ ...filters });
    dispatch(DataAsyncThunk())
  }

  // Separate function to apply the filter (dispatch to Redux)
  const applyFilter = () => {
    dispatch(setFilters(checkedItems));
    dispatch(DataAsyncThunk())
  };


  // default function to render tree nodes
  const renderTreeNodes = (nodes, parent) => {

    return nodes.map((node, i) => {
      // return folders to render
      return (
        // render main filter category if children are present
        node.children ?
          <div key={`${node.query}-${i}`}>
            <div onMouseEnter={() => changeLogo(node.query)} onMouseLeave={() => changeLogo("")} onClick={() => toggleTree(node.query)} className={styles.folder}>
              <p className='me-4 my-auto'>{node.name}</p>
              <span className={isCollapsed.includes(node.query) ? styles.open : ""}>
                <img className={color == node.query ? styles.hover : styles.img} src='https://cdn-icons-png.flaticon.com/128/271/271228.png' alt='icon' />
              </span>
            </div>
            <div>{renderTreeNodes(node.children, node)}</div>
          </div>
          :
          // renering children
          <div key={`${node}-${i}`} className={isCollapsed.includes(parent.query) ? styles.treeNodeVisible : styles.treeNode} onClick={() => handleFilter(parent.query, node)}>
            <input type='checkbox' checked={checkedItems[parent.query]?.includes(node) || false} readOnly />
            <label className={`ms-2 ${styles.treeNode_texts}`}>{node}</label>
          </div>
      );
    })
  }

  return (
    // return render part
    <>
      <div className="d-flex h-100">
        <div className={`col-md-3 d-none rounded  d-lg-block ${styles.sideMenuContainer}`}>
          <div className={`mt-2 pt-2 positition-sticky top-2 ${styles.filter_menu}`}>
            <h3 className='text-center text-light'>Filter</h3>
            <div className='d-flex'><button className={`my-3 py-1 text-center rounded mx-auto ${styles.filterBtn}`} onClick={() => handleReset()}>reset</button><button className={`my-3 py-1 text-center rounded mx-auto ${styles.filterBtn}`} onClick={() => applyFilter()}>apply</button></div>
            {Object.entries(checkedItems).map(([key, values]) => (
              <span key={key} className='d-flex flex-wrap'>
                {values.length > 0 ?
                  values.map((item, i) => (
                    <div key={i} className={`m-2 px-2 position-relative ${styles.activeFilter}`}>{item}<span onClick={() => handleFilter(key, item)} className={` ${styles.removeFilter}`}> x</span></div>
                  ))
                  : <span></span>
                }
              </span>
            ))}
          </div>
          {renderTreeNodes(filterData)}
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default SideMenu
