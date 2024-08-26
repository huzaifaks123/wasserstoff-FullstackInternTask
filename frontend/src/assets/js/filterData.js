// export hard coded filter attribute to narrow downa result
export const filterData = [
        {
            name: "Sector",
            query: "sector",
            children: [
                'Aerospace & defence', 'Automotive', 'Construction', 'Energy', 
                'Environment', 'Financial services', 'Food & agriculture', 
                'Government', 'Healthcare', 'Information Technology', 
                'Manufacturing', 'Media & entertainment', 'Retail', 
                'Security', 'Support services', 'Tourism & hospitality', 
                'Transport', 'Water'
              ]              
        },
        {
            name: "Country",
            query: "country",
            children: [
                'Algeria', 'Angola', 'Argentina', 'Australia', 'Austria', 'Azerbaijan', 'Belize', 
                'Brazil', 'Burkina Faso', 'Canada', 'China', 'Colombia', 'Cyprus', 'Denmark', 
                'Egypt', 'Estonia', 'Ethiopia', 'Gabon', 'Germany', 'Ghana', 'Greece', 'Hungary', 
                'India', 'Indonesia', 'Iran', 'Iraq', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait', 
                'Lebanon', 'Liberia', 'Libya', 'Malaysia', 'Mali', 'Mexico', 'Morocco', 'Niger', 
                'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Poland', 'Qatar', 'Russia', 'Saudi Arabia', 
                'South Africa', 'South Sudan', 'Spain', 'Syria', 'Turkey', 'Ukraine', 'United Arab Emirates', 
                'United Kingdom', 'United States of America', 'Venezuela'
              ]              
        },
        {
            name: "End Year",
            query: "end_year",
            children: [
                2016, 2017, 2018, 2019, 2020, 2021, 2022, 2024, 2025, 2026, 2027, 2028, 
                2030, 2034, 2035, 2036, 2040, 2041, 2046, 2050, 2051, 2055, 2060, 2126, 2200
              ]              
        },
        {
            name: "PEST",
            query: "pestle",
            children: ['Industries', 'Economic', 'Political', 'Organization', 'Environmental', 'Healthcare', 'Technological', 'Lifestyles', 'Social']             
        },
        {
            name: "Topic",
            query: "topic",
            children: [
                '3D', 'administration', 'agriculture', 'aquaculture', 'artificial intelligence', 
                'asylum', 'automaker', 'bank', 'battery', 'biofuel', 'brexit', 'building', 
                'business', 'capital', 'car', 'carbon', 'change', 'city', 'climate', 
                'climate change', 'clothing', 'coal', 'communication', 'consumer', 
                'consumption', 'crisis', 'data', 'demand', 'debt', 'economy', 'economic', 
                'economic growth', 'election', 'emission', 'energy', 'export', 'factory', 
                'farm', 'finance', 'food', 'fossil fuel', 'fracking', 'gamification', 
                'gas', 'gasoline', 'gdp', 'government', 'greenhouse gas', 'growth', 'ice', 
                'impact', 'infrastructure', 'information', 'industry', 'inflation', 
                'interest rate', 'investment', 'market', 'material', 'money', 'nuclear', 
                'oil', 'peak oil', 'plastic', 'policy', 'politics', 'pollution', 'population', 
                'power', 'production', 'resource', 'revenue', 'risk', 'robot', 'security', 
                'shale gas', 'shortage', 'software', 'storm', 'strategy', 'tax', 
                'technology', 'tension', 'terrorism', 'tourist', 'trade', 'transport', 
                'transportation', 'unemployment', 'vehicle', 'war', 'Washington', 'water', 
                'wealth', 'work', 'worker', 'workforce'
              ]
              
        },
        {
            name: "Intensity",
            query: "intensity",
            children: [1, 2, 3, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 24, 30, 32, 36, 40, 48, 60, 72, 96]
        },
        {
            name: "Region",
            query: "region",
            children: [
                'Africa', 'Asia', 'Central Africa', 'Central America', 'Central Asia', 
                'Eastern Africa', 'Eastern Asia', 'Eastern Europe', 'Europe', 
                'Northern Africa', 'Northern America', 'Northern Europe', 'Oceania', 
                'South America', 'South-Eastern Asia', 'Southern Africa', 'Southern Asia', 
                'Southern Europe', 'Western Africa', 'Western Asia', 'Western Europe', 
                'World', 'world'
              ]
              
        },
        {
            name: "Source",
            query: "source",
            children: ["3D Printing Progress", "4th Annual Congress and Expo on Biofuels and Bioenergy April 27-28 2017 Dubai UAE", "AHDB", "AMERICAN COUNCIL ON SCIENCE AND HEALTH", "About Best Binary Options Strategy", "Abq", "Activist Post", "Adam Curry", "African Arguments", "African Development Bank", "AgWeb - The Home Page of Agriculture", "Aljazeera.com", "AllAfrica", "Arangkada Philippines", "Atlantic Council", "Australian Government", "Australian Government Department of Defence", "Avi Melamed", "Azonano", "BBC News Technology", "Bearnobull", "Biofuels Digest", "Bloomberg Business", "Bloomberg New Energy Finance", "Blue and Green Tomorrow", "BorneoPost Online", "Brookings Institute", "Business Green", "Business Insider", "Business Standard", "Business Wire", "CAFrackFacts", "CAJ News Africa", "CBO", "CDC", "CIO", "CNBC", "CNNMoney", "CSIS", "Canadian Biomass", "Carbon Brief", "Cars.co.za", "Channel News Asia", "Cii Radio", "Citibank", "CleanTechnica", "Climate Change News", "Climate News Network", "Common Dreams", "Convenience Store Decisions", "Cornell University", "Countries.com Global Content", "Critical Threats", "Cushman & Wakefield", "Cushman & Wakefield Blog", "DOE EIA 2013 Energy Conference", "DW.COM", "Days Of Year", "Digitalist Magazine", "Drill or drop?", "Drydock Magazine", "ECFR", "EGYPS", "EIA", "EIU", "EPA", "EPS News", "ESPAS", "ETEnergyworld.com", "EV Obsession", "EY", "Eco-Business.com", "Edge and Odds", "Elsevier", "Embedded Computing Design", "Energy", "Energy Tomorrow", "Energy.gov Website", "Engineering News", "Environment", "Environmental Leader", "Euler Hermes", "Eurasia Group", "Euromoney", "Europa", "Europe in My Region", "European Central Bank", "European Council", "European Environment Agency", "FAO", "FX Empire", "Face2face Africa", "Farms.com", "FashionNetwork.com", "Fast Co-Exist", "Fews Net", "Finance Magnates", "Financial Bitcoin & Cryptocurrency News", "Fitch", "FoodQualityNews.com", "Foreign Policy", "Fox Business", "Freedonia", "Freenewspos", "Future Earth", "Future Market Insights", "Future Timeline", "Future in Focus", "FutureinFocus", "Futureseek query Digest", "Futurity", "GE Reports", "Gartner", "Gas 2", "Gii Research", "Gizmodo Australia", "Global Information Inc", "Global Money Trends", "Global Money Trends Magazine", "GlobalMeatNews.com", "Government", "Government of Ireland", "GreenBiz", "Guardian", "Guardian Sustainable Business", "Guarini Center", "HBR", "Hardin Tibbs", "Hospitality Trends", "Huffington Post", "IASTOPPERS", "IBEF", "ID TECH INDEX", "IEA", "IEA.org", "IER", "IFT", "IHS Engineering 360", "IISS", "IMF", "INSEAD Knowledge", "IRENA", "IRENA newsroom", "ISA", "Imeche", "Industrial Control Security", "Industry Week", "Informed Choice Chartered Financial Planners in Cranleigh", "Infracircle", "Innovaro", "Innovate UK", "Innovations Report", "Inside Climate News", "Institutional Investor", "Insurance Journal", "Interior Design", "International Banker", "International Business Times", "International Monetary Fund (IMF)", "Investopedia", "JD Supra", "Jachin Capital", "Justmeans", "Khaleej Times", "Koenig Investment Advisory", "LNG", "Lawfare", "Le·gal In·sur·rec·tion", "LiveMint", "MAPI", "MENA-Forum", "MIT Sloan Management Review", "MIT Technology Review", "MRC", "Manufacturing Operations Technology Viewpoints", "Maplecroft", "Mast", "McKinsey & Company", "McKinsey Quarterly", "Media Center", "Middle East Eye", "Mind Commerce", "Motor Magazine", "NDTV", "NWF", "NY Times", "Nanotechnology Innovation", "Nation of Change", "National Geographic Society (blogs)", "Nature", "New Security Beat", "News", "News.com", "Newsletter", "Newsweek", "Nexus Conference", "No 2 Nuclear Power", "OEM/Lube News", "OMFIF", "OPEC", "Ocean Acidification", "Oil and Gas Journal", "OklahomaMinerals.com", "Oxfam", "PDQFX news", "PR Newswire", "Peak Prosperity", "Phys Org", "Physics World", "Pickens Plan", "Planetizen", "Planetsave", "Politico", "Predictive Analytics Times", "PriceWaterhouseCoopers", "Project Syndicate", "Prospects for Development", "PwC", "Quartz", "RUSI", "ReadWrite", "Real Estate Professional", "Renewable Energy World", "Resilience", "Resources for the Future", "Reuters", "Rigzone", "RiskMap 2017", "Robothub", "Russia Beyond The Headlines", "SBWire", "Scania Group", "Science Daily", "Science News", "Scientific American", "Seeking Alpha", "Shenandoah", "SlideShare", "Smart Grid Observer", "Society of Motor Manufacturers and Traders (SMMT)", "South China Morning Post", "South Sudan News Agency", "South World", "Sputnik News", "Squerying Toward Retirement", "Star Tribune", "Strategy & Formerly Booz & Company", "Sydney Morning Herald", "THE LEAGUE OF WOMEN VOTERS® OF THE FAIRFAX AREA", "THISDAY LIVE", "TRAC News", "Tactical Investor", "Tech Times", "Technavio", "TeleTrade", "The American Prospect", "The Arab Gulf States Institute Washington", "The Atlantic", "The Chirographer", "The Conversation", "The Economist", "The Engineer", "The Globe and Mail", "The Guardian", "The Independent", "The Jakarta Post", "The Jamestown Foundation", "The Mainichi", "The Market Mogul", "The Nation", "The Next Web", "The Ticker Tape", "TheCable", "TheNews.NG", "Think Progress", "Thomson Reuters", "Time", "Total", "Transport Environment", "Transport Evolved", "Triple Pundit", "U.K. Ministry of Defense", "U.S. Environmental Protection Agency", "UK Government", "UNEP", "UNESCO", "USDA", "University Chronicle", "University of Chicago", "University of Latvia", "Utility Dive", "VITA Technologies", "VOA", "Vanguard News", "Verisk Maplecroft", "Virgin Atlantic", "Vox", "WSJ", "Wall Street Daily", "War on the Rocks", "Washington Post", "Wells Fargo", "Wharton", "Wikipedia", "Wired UK", "Wood McKenzie", "World Bank", "World Bank Group", "World Energy News", "World Health", "Worldly", "Yahoo Finance", "Yahoo Finance Canada", "Yes Bank", "Zawya", "Zero Hedge", "agriworldsa", "allianzglobalinvestors", "amundi", "arabellaadvisors", "aswm", "atradius", "bankofcanada", "bankofengland", "betterenergy", "biologicaldiversity", "biomassmagazine", "briandcolwell", "cargill", "clientadvisoryservices", "cloudfront", "conferenceseries", "controleng", "cpzulia", "creamermedia", "dailyquiddity", "dailytexanonline", "djsresearch", "dpaq", "ebrd", "ecesr", "economy", "edie.net", "energy news cyprus", "energyglobal", "environmentalpeacebuilding", "ethicalconsumer", "ethicalmarkets", "europeanclimate", "farms", "friday-thinking", "g7g20", "gasstrategies", "globalfueleconomy", "globalizationpartners", "globalmoneytrends", "globalr2p", "greenerearthnews", "iMFdirect - The IMF Blog", "iamericas", "idc-community", "ihsmarkit", "inputsmonitor", "jeita", "khorreports-palmoil", "knomad", "maltawinds.com", "marketrealist", "metalprices", "murc", "nbk", "nbp", "newscientist", "nextbigfuture", "njc-cnm", "ogauthority", "oilprice.com", "oilvoice", "platts", "polymerspaintcolourjournal", "portfolioticker", "prsync", "saltlakecityheadlines", "satprnews", "savepassamaquoddybay", "sustainablebrands.com", "the star online", "theicct", "therobotreport", "thespanisheconomy", "unian", "uschamber", "valburyresearch", "veteranstoday", "watercanada", "westpandi", "worldculturepictorial", "worldenergy", "www.narendramodi.in"]
        },
    ]