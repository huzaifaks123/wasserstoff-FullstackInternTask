// import required styles modules to style elments
import styles from '../styles/navbar.module.css';
import style from '../styles/sidemenu.module.css';

// import routing element to render with reloading tab
import { Link, Outlet } from "react-router-dom";

// import necessory hooks
import { useDispatch, useSelector } from 'react-redux';

// import filterData to render side menu on collapsing
import { filterData } from '../assets/js/filterData';

// import thunkApi to run when page reload
import { DataAsyncThunk, DataSelector, resetFilters, setFilters } from '../redux/reducers/DashboardReducer';

// import necessory react hooks 
import { useEffect, useRef, useState } from "react";;

// export Navbar Component
const Navbar = () => {

    // defined necessory state for Navbar
    const [isCollapsed, setIsCollapsed] = useState([]);
    const [show, setShow] = useState(false)
    const [color, setColor] = useState("");
    const [checkedItems, setCheckedItems] = useState({});

    // create ref using ref hook
    const btnRef = useRef();

    // create dispatch
    const dispatch = useDispatch();
    const { filters } = useSelector(DataSelector);

    // dispatch asyncThunk on everydispatch
    useEffect(() => {
        dispatch(DataAsyncThunk());
    }, [dispatch]);

    // function to toggle SideMenu Visibility
    function toggleMenu() {
        setShow(!show);
    }

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

    // function to toggle menu off on clickking any other page
    const toggleMenuOff = () => {
        const button = btnRef.current;
        button.click();
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

    const handleReset = () => {
        dispatch(resetFilters())
        setCheckedItems({ ...filters });
        dispatch(DataAsyncThunk())
        toggleMenuOff()
    }

    // Separate function to apply the filter (dispatch to Redux)
    const applyFilter = () => {
        dispatch(setFilters(checkedItems));
        dispatch(DataAsyncThunk())
        toggleMenuOff()
    };

    // default function to render tree nodes
    const renderTreeNodes = (nodes, parent) => {
        return nodes.map((node, i) => {
            return (
                node.children ? (
                    // return folders to render
                    <div key={`${node.query}-${i}`}>
                        <div onMouseEnter={() => changeLogo(node.query)} onMouseLeave={() => changeLogo("")} onClick={() => toggleTree(node.query)} className={style.folder}>
                            <p className='me-4 my-auto'>{node.name}</p>
                            <span className={isCollapsed.includes(node.query) ? style.open : ""}>
                                <img className={color == node.query ? style.hover : style.img} src='https://cdn-icons-png.flaticon.com/128/271/271228.png' alt='icon' />
                            </span>
                        </div>
                        <div>{renderTreeNodes(node.children, node)}</div>
                    </div>
                ) : (
                    <div key={`${node}-${i}`} className={isCollapsed.includes(parent.query) ? style.treeNodeVisible : style.treeNode} onClick={() => handleFilter(parent.query, node)}>
                        <input type='checkbox' checked={checkedItems[parent.query]?.includes(node) || false} readOnly />
                        <label className={`ms-2 ${style.treeNode_texts}`}>{node}</label>
                    </div>
                )
            );
        });
    };

    // return Nav
    return (
        <div className={styles.body}>
            <nav className={`navbar navbar-expand-lg d-flex align-items-center rounded ${styles.navContainer}`}>
                <div className="container-fluid d-flex flex-nowrap justify-content-start w-50 me-auto m-0">
                    <button
                        className={`navbar-toggler btn-selector border ${styles.customToggler}`}
                        ref={btnRef}
                        type="button"
                        onClick={toggleMenu}
                        aria-controls="navbarSupportedContent"
                        aria-expanded={show}
                        aria-label="Toggle navigation"
                    >
                        <span><img src='https://cdn-icons-png.flaticon.com/128/566/566737.png' style={{width : "35px", height : "35px"}}/></span>
                    </button>

                    <div className={`navbar-nav z-3 rounded ${style.navMenuCollapsed} ${show ? "show" : ""}`} id="navbarSupportedContent">
                        <div className={`nav-options ps-2 rounded ${style.navMenuContainer} ${show ? "d-block" : "d-none d-lg-block d-lg-none"}`}>
                            <div className={`mt-2 pt-2 positition-sticky top-2 ${style.filter_menu}`}>
                                <h3 className='text-center text-light'>Filter</h3>
                                <div className='d-flex'><button className={`my-3 py-1 text-center rounded mx-auto ${style.filterBtn}`} onClick={() => handleReset()}>reset</button><button className={`my-3 py-1 text-center rounded mx-auto ${style.filterBtn}`} onClick={() => applyFilter()}>apply</button></div>
                                {Object.entries(checkedItems).map(([key, values]) => (
                                    <span key={key} className='d-flex flex-wrap'>
                                        {values.length > 0 ?
                                            values.map((item, i) => (
                                                <div key={i} className={`m-2 px-2 position-relative ${style.activeFilter}`}>{item}<span onClick={() => handleFilter(key, item)} className={` ${style.removeFilter}`}> x</span></div>
                                            ))
                                            : <span></span>
                                        }
                                    </span>
                                ))}
                            </div>
                            {renderTreeNodes(filterData)}
                        </div>
                    </div>
                    <div className={`d-flex align-items-center fs-3 ${styles.brand}`}>
                        <div className={`navbar-brand me-auto ${styles.brandLogo}`} />
                        <span className={styles.brandName}>BRAND</span>
                    </div>
                </div>
                <div className={`d-flex justify-content-around me-4 ${styles.navMenu} ${show ? "show" : ""}`} id="navbarSupportedContent">
                    <div className="mb-2 mb-lg-0">
                        <div className="nav-options mx-auto">
                            <img className={styles.profilePic} src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png" alt="profile-pic" />
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default Navbar