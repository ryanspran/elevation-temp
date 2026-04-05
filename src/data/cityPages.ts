export interface CityNeighborhood {
  name: string;
  description: string;
}

export interface CityDifferentiator {
  title: string;
  description: string;
}

export interface CityPageData {
  slug: string;
  city: string;
  state: string;
  h1: string;
  subheadline: string;
  metaTitle: string;
  metaDescription: string;
  introParagraphs: string[];
  serviceSlugs: string[];
  differentiators: CityDifferentiator[];
  neighborhoods: CityNeighborhood[];
  indexDescription: string;
}

export const cityPages: CityPageData[] = [
  {
    slug: "greenville-sc",
    city: "Greenville",
    state: "SC",
    h1: "Luxury Landscaping & Hardscaping in Greenville, SC",
    subheadline: "The Upstate's premier landscape firm for Greenville's most distinguished properties",
    metaTitle: "Luxury Landscaping & Hardscaping in Greenville, SC | Elevation Landscapes",
    metaDescription: "Premium hardscaping, paver patios, retaining walls, and landscape design for Greenville's most distinguished properties. Schedule your private consultation today.",
    introParagraphs: [
      "Greenville is the heart of Upstate South Carolina and home to some of the region's most prestigious properties. From historic estates along Augusta Road to modern luxury builds in Montebello, Greenville homeowners expect outdoor spaces that match the caliber of their homes. The city's booming growth has created a landscape where classic Southern elegance meets contemporary design — and outdoor living is central to both.",
      "The Piedmont clay soil that underlies much of Greenville presents unique challenges that only experienced landscape professionals can navigate. Proper grading, engineered drainage solutions, and foundation preparation are essential before any hardscaping project can begin. At Elevation Landscapes, we bring deep knowledge of Greenville's specific soil conditions, elevation changes, and micro-climates to every project we undertake.",
      "Whether you're envisioning an expansive paver patio overlooking your pool, a custom outdoor kitchen for entertaining, or landscape lighting that transforms your property after dark, our team designs and builds outdoor spaces worthy of Greenville's finest addresses."
    ],
    serviceSlugs: ["paver-patios", "outdoor-kitchens", "landscape-lighting", "custom-water-features", "block-retaining-walls", "new-plant-installation"],
    differentiators: [
      { title: "Deep Local Expertise", description: "We understand Greenville's Piedmont clay soil, drainage patterns, and the specific challenges of building on the rolling terrain that defines the Upstate's most desirable neighborhoods." },
      { title: "Estate-Caliber Design", description: "From Thornblade to Augusta Road, we design outdoor spaces that complement Greenville's most prestigious addresses with materials and craftsmanship to match." },
      { title: "Comprehensive Project Management", description: "Greenville's permitting requirements and HOA guidelines vary by neighborhood. We handle every detail so you can focus on enjoying the finished result." },
      { title: "Year-Round Beauty", description: "Our plantings and hardscape designs account for Greenville's four distinct seasons, ensuring your outdoor space looks stunning from spring azaleas through fall foliage." }
    ],
    neighborhoods: [
      { name: "Thornblade", description: "Prestigious golf community with estates ranging from 2,800 to 5,000+ square feet on meticulously maintained grounds." },
      { name: "Augusta Road", description: "Historic charm with mature tree-lined streets and established luxury homes that define old Greenville elegance." },
      { name: "Montebello", description: "Exclusive gated community offering mountain and city views with modern luxury architecture." },
      { name: "Chanticleer", description: "Old Greenville elegance nestled alongside one of the country's top-100 golf courses." },
      { name: "Hollingsworth Park", description: "Upscale in-town living within walking distance of downtown Greenville's vibrant cultural scene." },
      { name: "The Cliffs Communities", description: "Mountain retreats demanding resort-caliber landscapes that blend with the natural Blue Ridge environment." }
    ],
    indexDescription: "The Upstate's premier landscape firm serving Greenville's most distinguished properties and neighborhoods."
  },
  {
    slug: "simpsonville-sc",
    city: "Simpsonville",
    state: "SC",
    h1: "Luxury Landscaping & Hardscaping in Simpsonville, SC",
    subheadline: "Premium outdoor living for Simpsonville's growing luxury market",
    metaTitle: "Premium Hardscaping & Landscaping Simpsonville, SC | Elevation Landscapes",
    metaDescription: "Expert paver patios, retaining walls, grading, and drainage solutions for Simpsonville properties. Trusted by homeowners across Five Forks and beyond.",
    introParagraphs: [
      "Simpsonville has become one of the fastest-growing communities in the Upstate, with new luxury developments and established neighborhoods driving demand for high-end outdoor spaces. The Five Forks corridor alone has seen explosive growth, bringing custom-built homes that deserve equally custom-designed landscapes. Homeowners here understand that a well-designed outdoor space isn't a luxury — it's an expectation.",
      "The area's rolling terrain and red clay soil create unique hardscaping challenges that require engineered foundations and proper drainage — specialties that define Elevation Landscapes. Many Simpsonville properties sit on slopes that need retaining walls, graded bases, and underground drainage systems before any patio or outdoor kitchen can be installed. We've built our reputation solving exactly these problems.",
      "From expansive entertainer's patios in Five Forks to complete landscape transformations in Cobblestone, we bring the same precision engineering and luxury craftsmanship to every Simpsonville project. The Southern entertaining season is long here, and our outdoor living designs help you make the most of every month."
    ],
    serviceSlugs: ["paver-patios", "block-retaining-walls", "grading-solutions", "underground-drainage-solutions", "sod-and-seeding", "outdoor-kitchens"],
    differentiators: [
      { title: "Slope & Drainage Specialists", description: "Simpsonville's rolling terrain demands expert grading and drainage solutions. We engineer every project from the ground up to prevent water issues before they start." },
      { title: "New Construction Expertise", description: "We work seamlessly with Simpsonville's top builders to design and install landscapes for new custom homes, ensuring the outdoor space matches the quality of the build." },
      { title: "HOA-Compliant Design", description: "Many Simpsonville communities have specific architectural guidelines. We navigate these requirements while delivering designs that exceed expectations." },
      { title: "Investment-Minded Approach", description: "In Simpsonville's competitive real estate market, our projects consistently increase property values and curb appeal for homeowners planning to stay or sell." }
    ],
    neighborhoods: [
      { name: "Five Forks", description: "Rapidly growing luxury corridor with new custom builds and some of the Upstate's most sought-after addresses." },
      { name: "Cobblestone", description: "Upscale community with large lots and distinctive architectural styles that invite creative landscape design." },
      { name: "Simpsonville Historic District", description: "Charming established homes with mature lots offering exciting renovation and landscape refresh potential." },
      { name: "Holly Tree Plantation", description: "Family-oriented luxury community with generous lot sizes ideal for expansive outdoor living spaces." },
      { name: "Fountain Inn (nearby)", description: "Rural estates with acreage that benefit from comprehensive, master-planned landscape designs." }
    ],
    indexDescription: "Premium outdoor living solutions for Simpsonville's fastest-growing luxury neighborhoods."
  },
  {
    slug: "greer-sc",
    city: "Greer",
    state: "SC",
    h1: "Luxury Landscaping & Hardscaping in Greer, SC",
    subheadline: "Where Upstate craftsmanship meets Greer's distinctive properties",
    metaTitle: "Expert Landscaping & Hardscaping in Greer, SC | Elevation Landscapes",
    metaDescription: "Custom retaining walls, landscape lighting, stone pathways, and paver patios for Greer homeowners. Serving estates from Thornblade to Pelham Falls.",
    introParagraphs: [
      "Greer sits at the crossroads of Greenville and Spartanburg counties, offering a unique blend of suburban luxury and rural estate properties that few Upstate communities can match. From the prestigious homes carrying a Greer address in Thornblade to custom builds along the Highway 14 corridor, Greer homeowners invest thoughtfully in outdoor spaces that reflect the area's distinctive character — a place where convenience and open space coexist.",
      "The rolling Piedmont terrain that defines much of Greer makes retaining walls and expert grading essential components of nearly every significant landscape project. Elevation changes of several feet across a single property are common, and these slopes create both dramatic design opportunities and engineering challenges. Our team excels at transforming challenging grades into stunning terraced patios, boulder walls, and stone pathways that work with the land rather than fighting it.",
      "Proximity to GSP International Airport and I-85 has fueled Greer's growth, attracting homeowners who demand the same caliber of craftsmanship in their outdoor spaces as they experience in their travels. Whether you're looking to illuminate a winding stone pathway or install a complete irrigation system for your estate grounds, Elevation Landscapes brings world-class execution to every Greer project."
    ],
    serviceSlugs: ["boulder-retaining-walls", "landscape-lighting", "custom-stone-pathways", "irrigation-installation-repair", "paver-patios", "grading-solutions"],
    differentiators: [
      { title: "Terrain Transformation Experts", description: "Greer's rolling terrain is our specialty. We turn challenging elevation changes into dramatic design features with precision-engineered retaining walls and terraced outdoor spaces." },
      { title: "Estate-Scale Capability", description: "Many Greer properties sit on larger lots that require comprehensive landscape plans. We have the team and equipment to execute projects of any scale." },
      { title: "Dual-County Knowledge", description: "Straddling Greenville and Spartanburg counties means navigating different regulations. Our experience across both jurisdictions ensures smooth project execution." },
      { title: "Irrigation Intelligence", description: "Greer's mix of sun exposure and soil types demands smart irrigation design. We install systems that conserve water while keeping your landscape thriving." }
    ],
    neighborhoods: [
      { name: "Thornblade", description: "Golf course community with luxury estates carrying a Greer address and demanding the highest standard of landscape design." },
      { name: "Riverwood Farm", description: "Estate lots with pastoral views and the space for truly expansive outdoor living projects." },
      { name: "Pelham Falls", description: "Growing luxury corridor near I-85 with modern homes and a strong demand for premium hardscaping." },
      { name: "The Reserve at Greer", description: "New luxury development offering custom build opportunities with blank-canvas landscape potential." },
      { name: "Tyger River area", description: "Rural estates requiring comprehensive landscape design that harmonizes with the natural riverside environment." }
    ],
    indexDescription: "Where Upstate craftsmanship meets Greer's distinctive estates and growing luxury communities."
  },
  {
    slug: "travelers-rest-sc",
    city: "Travelers Rest",
    state: "SC",
    h1: "Luxury Landscaping & Hardscaping in Travelers Rest, SC",
    subheadline: "Landscape design that honors Travelers Rest's natural mountain beauty",
    metaTitle: "Landscaping & Hardscaping Travelers Rest, SC | Elevation Landscapes",
    metaDescription: "Boulder retaining walls, natural stone staircases, and mountain-inspired landscape design for Travelers Rest properties. Blending hardscape with nature.",
    introParagraphs: [
      "Travelers Rest has transformed from a quiet mountain gateway into one of the Upstate's most desirable communities, where natural beauty meets refined living. The Swamp Rabbit Trail has elevated property values and drawn discerning homeowners who appreciate the town's artisan culture, farm-to-table dining, and proximity to the Blue Ridge foothills. Here, outdoor living isn't just an amenity — it's a way of life.",
      "Properties in Travelers Rest often feature dramatic elevation changes, rocky terrain, and native plant ecosystems that demand a landscape firm with deep knowledge of mountain-adjacent design. Standard hardscaping approaches simply don't work on a 30-degree slope with exposed granite. Our team specializes in boulder retaining walls, natural stone staircases, and custom water features that work with TR's unique topography rather than against it.",
      "The desire to blend hardscape with the natural Blue Ridge foothills landscape is what sets Travelers Rest projects apart. Our designs honor the native woodland aesthetic while creating functional outdoor spaces — think a terraced patio nestled into a hillside with locally-sourced stone, or landscape lighting that highlights mature hardwoods without disturbing the natural ambiance."
    ],
    serviceSlugs: ["boulder-retaining-walls", "natural-stone-staircases", "custom-water-features", "landscape-remediation", "new-plant-installation", "landscape-lighting"],
    differentiators: [
      { title: "Mountain-Adjacent Specialists", description: "We understand the unique challenges of building on TR's sloped, rocky terrain — from exposed granite to dramatic elevation changes that require specialized engineering." },
      { title: "Nature-Forward Design", description: "Our designs blend seamlessly with the Blue Ridge foothills aesthetic, using locally-sourced stone and native plantings that feel like they belong." },
      { title: "Creek & Water Management", description: "Many TR properties include creek frontage or natural water flow patterns. We design around these features, turning potential problems into stunning focal points." },
      { title: "Ecological Sensitivity", description: "We protect existing native ecosystems while creating beautiful outdoor spaces, preserving the natural character that makes Travelers Rest special." }
    ],
    neighborhoods: [
      { name: "North Main corridor", description: "Walkable to downtown TR's beloved shops, breweries, and restaurants with charming homes on wooded lots." },
      { name: "Mountain Bridge", description: "Wilderness community with dramatic elevation changes and panoramic mountain views demanding expert landscape solutions." },
      { name: "Camp Creek area", description: "Estate properties with creek frontage and native woodland that inspire naturalistic landscape design." },
      { name: "Tigerville Road corridor", description: "Mountain-adjacent luxury with privacy, views, and lots that benefit from thoughtful hardscape integration." },
      { name: "Paris Mountain area", description: "Properties nestled against state park land where landscape design must complement the surrounding natural beauty." }
    ],
    indexDescription: "Mountain-inspired landscape design that honors Travelers Rest's natural beauty and unique terrain."
  },
  {
    slug: "mauldin-sc",
    city: "Mauldin",
    state: "SC",
    h1: "Luxury Landscaping & Hardscaping in Mauldin, SC",
    subheadline: "Elevating outdoor spaces in one of the Upstate's most connected communities",
    metaTitle: "Hardscaping & Outdoor Living in Mauldin, SC | Elevation Landscapes",
    metaDescription: "Paver patios, fire pits, outdoor kitchens, and landscape lighting for Mauldin homeowners. Transform your backyard into a luxury outdoor living space.",
    introParagraphs: [
      "Mauldin's central location between Greenville and Simpsonville makes it one of the Upstate's most sought-after communities for families and professionals who want convenience without compromising on quality of life. The city's well-maintained neighborhoods, excellent schools, and vibrant community events create a setting where investing in your outdoor space pays dividends in both daily enjoyment and long-term property value.",
      "Properties in Mauldin typically feature flat-to-gently-rolling lots that are ideal for expansive patio designs, outdoor kitchens, and fire features — making the area a sweet spot for luxury hardscaping projects. Unlike the steep terrain found in foothill communities, Mauldin's gentler grades allow for sweeping entertainment spaces, wide pathways, and open-concept outdoor living rooms that flow naturally from the home's interior.",
      "The Golden Strip corridor and Mauldin's mix of mid-century established homes and newer builds create diverse opportunities for landscape transformation. Whether you're refreshing the mature landscaping around a 1980s brick home or designing a complete outdoor oasis for a new build in Butler Springs, our team tailors every project to the property's unique character and your family's lifestyle."
    ],
    serviceSlugs: ["paver-patios", "outdoor-gas-fire-pits", "outdoor-kitchens", "irrigation-installation-repair", "sod-and-seeding", "landscape-lighting"],
    differentiators: [
      { title: "Entertainment-Focused Design", description: "Mauldin's flat lots are perfect for expansive outdoor living spaces. We design patios, kitchens, and fire features that make your backyard the ultimate gathering place." },
      { title: "Mature Property Refresh", description: "Many Mauldin homes have aging landscapes that need professional remediation and modern redesign. We breathe new life into established properties." },
      { title: "Family-Centered Approach", description: "We design outdoor spaces that work for the whole family — from safe, durable hardscaping to low-maintenance plantings that look beautiful year-round." },
      { title: "Irrigation Optimization", description: "Mauldin's mix of sun exposure and established tree canopy requires smart irrigation zoning. We install systems tailored to your property's specific conditions." }
    ],
    neighborhoods: [
      { name: "Bridgewater", description: "Popular upscale community with family-friendly amenities and homes that benefit from premium outdoor upgrades." },
      { name: "Plantation Pointe", description: "Established luxury neighborhood with mature landscaping that often needs professional refreshing and modernization." },
      { name: "Butler Springs", description: "Growing community with new construction opportunities and homeowners eager to invest in quality outdoor spaces." },
      { name: "Knollwood", description: "Mature neighborhood where landscape renovation demand is high as homeowners update their outdoor living areas." },
      { name: "East Butler Road corridor", description: "Mix of established and new luxury properties along one of Mauldin's most desirable residential corridors." }
    ],
    indexDescription: "Elevating outdoor spaces across Mauldin's most connected and family-friendly communities."
  },
  {
    slug: "taylors-sc",
    city: "Taylors",
    state: "SC",
    h1: "Luxury Landscaping & Hardscaping in Taylors, SC",
    subheadline: "Premium landscape solutions for Taylors' established and emerging luxury market",
    metaTitle: "Landscaping & Hardscaping in Taylors, SC | Elevation Landscapes",
    metaDescription: "Landscape remediation, retaining walls, stone pathways, and drainage solutions for Taylors properties. Serving Paris Mountain to Wade Hampton corridor.",
    introParagraphs: [
      "Taylors occupies a unique position in the Upstate landscape — close enough to downtown Greenville for convenient access to restaurants, shops, and cultural venues, yet with enough space and community character to feel distinctly its own. This combination has attracted homeowners who value both accessibility and the generous lot sizes that define Taylors' most desirable neighborhoods.",
      "Properties here range from established homes on half-acre-plus lots with mature hardwoods to newer luxury developments with modern architecture and open floor plans. Many of Taylors' older neighborhoods feature aging landscapes — overgrown beds, failing retaining walls, and drainage issues that have worsened over decades. These properties represent some of our most rewarding projects, as professional remediation can reveal the stunning potential hidden beneath years of neglect.",
      "The Paris Mountain influence on Taylors' topography creates a distinct landscape character, with properties that rise and fall with the foothills terrain. This elevation variation, combined with the area's established tree canopy and diverse soil conditions, requires a landscape firm that understands how to work with — not against — the natural lay of the land. Our team brings that expertise to every Taylors project."
    ],
    serviceSlugs: ["landscape-remediation", "block-retaining-walls", "custom-stone-pathways", "underground-drainage-solutions", "new-plant-installation", "paver-patios"],
    differentiators: [
      { title: "Remediation & Restoration", description: "Taylors' mature neighborhoods often need landscape rehabilitation. We specialize in transforming overgrown, neglected properties into stunning outdoor spaces." },
      { title: "Mature Tree Preservation", description: "Taylors' established tree canopy is a defining asset. We design around existing hardwoods and mature plantings, protecting root systems during construction." },
      { title: "Drainage Problem Solvers", description: "Decades of settling and erosion create hidden drainage issues in Taylors' older neighborhoods. We diagnose and solve these problems permanently." },
      { title: "Foothill Terrain Knowledge", description: "The Paris Mountain influence creates unique grade challenges. We engineer retaining walls and pathways that handle these slopes with precision." }
    ],
    neighborhoods: [
      { name: "Paris Mountain area", description: "Elevated properties with panoramic views and challenging terrain that demands expert landscape engineering." },
      { name: "Taylors Mill district", description: "Historic character near the revitalized mill area with homes that blend heritage charm and modern renovation." },
      { name: "Wade Hampton corridor", description: "Established homes on large lots with mature landscapes that benefit from professional refresh and redesign." },
      { name: "Lee Road area", description: "Mix of estate properties and newer developments offering diverse opportunities for landscape transformation." },
      { name: "Northwood area", description: "Family-oriented luxury neighborhoods where quality outdoor spaces enhance daily life and property values." }
    ],
    indexDescription: "Premium landscape solutions for Taylors' established neighborhoods and emerging luxury market."
  },
  {
    slug: "easley-sc",
    city: "Easley",
    state: "SC",
    h1: "Luxury Landscaping & Hardscaping in Easley, SC",
    subheadline: "Craftsmanship that matches Easley's growing luxury landscape",
    metaTitle: "Landscaping & Hardscaping in Easley, SC | Elevation Landscapes",
    metaDescription: "Professional grading, retaining walls, plant installation, and irrigation for Easley and Pickens County properties. Comprehensive landscape design and build.",
    introParagraphs: [
      "Easley has emerged as an attractive destination for homeowners seeking more space, greater value, and the charm of a smaller Upstate community — all without sacrificing easy access to Greenville. Properties here tend toward larger lots and rural estates, creating opportunities for comprehensive landscape projects that encompass everything from expansive hardscaping to fully designed planting beds that showcase the region's natural beauty.",
      "The western Upstate's proximity to Lake Keowee and the Blue Ridge foothills gives Easley a landscape character distinct from communities closer to Greenville. The terrain is more varied, the soils range from red clay to rocky loam, and the growing conditions shift as you move toward the mountains. This diversity requires a landscape firm that can adapt its approach to each property's unique conditions — exactly the kind of site-specific expertise Elevation Landscapes brings to every project.",
      "Pickens County's growing luxury market has brought new custom builds alongside Easley's established neighborhoods, creating demand for master-planned landscape designs that can transform raw lots into finished outdoor environments. From engineered grading on new construction sites to comprehensive irrigation systems for estate-sized properties, we deliver the same precision and quality our Greenville clients have come to expect."
    ],
    serviceSlugs: ["grading-solutions", "boulder-retaining-walls", "new-plant-installation", "irrigation-installation-repair", "sod-and-seeding", "custom-stone-pathways"],
    differentiators: [
      { title: "Large-Lot Specialists", description: "Easley's generous lot sizes and estate properties require comprehensive landscape planning. We design master plans that bring cohesion to expansive outdoor spaces." },
      { title: "Diverse Soil Knowledge", description: "From red clay to rocky loam, Easley's varied soil conditions demand adaptive approaches. We test and engineer solutions tailored to your property's specific ground." },
      { title: "New Construction Partnership", description: "We work with Easley's builders to plan landscapes from the grading phase forward, preventing costly issues and ensuring a seamless finished property." },
      { title: "Mountain-Influenced Aesthetics", description: "Easley's proximity to the foothills inspires designs that incorporate natural stone, native plantings, and organic forms that complement the surrounding landscape." }
    ],
    neighborhoods: [
      { name: "Woodside", description: "Growing luxury community with new builds that offer exciting blank-canvas landscape design opportunities." },
      { name: "Crossroads area", description: "Estate properties with acreage ideal for comprehensive, multi-phase landscape master plans." },
      { name: "Dacusville Road corridor", description: "Rural luxury with mountain views and properties that benefit from naturalistic landscape design." },
      { name: "Smith Farms", description: "Family-oriented community with homeowners investing in quality outdoor living spaces." },
      { name: "Crestwood Forest", description: "Established neighborhood with mature properties ready for landscape renovation and modernization." }
    ],
    indexDescription: "Comprehensive landscape design and build for Easley's estates and growing luxury communities."
  }
];

// Map city names to slugs for linking from homepage
export const citySlugMap: Record<string, string> = {
  "Greenville": "greenville-sc",
  "Simpsonville": "simpsonville-sc",
  "Greer": "greer-sc",
  "Travelers Rest": "travelers-rest-sc",
  "Mauldin": "mauldin-sc",
  "Taylors": "taylors-sc",
  "Easley": "easley-sc",
};
