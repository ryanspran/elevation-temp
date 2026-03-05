import gradingSolutions from "@/assets/services/grading-solutions.jpg";
import undergroundDrainage from "@/assets/services/underground-drainage.jpg";
import irrigation from "@/assets/services/irrigation.jpg";
import landscapeRemediation from "@/assets/services/landscape-remediation.jpg";
import waterFeatures from "@/assets/services/water-features.jpg";
import stoneStaircases from "@/assets/services/stone-staircases.jpg";
import stonePathways from "@/assets/services/stone-pathways.jpg";
import boulderWalls from "@/assets/services/boulder-walls.jpg";
import blockWalls from "@/assets/services/block-walls.jpg";
import blockWallsHero from "@/assets/services/block-walls-hero.jpg";
import blockWallsTestimonial from "@/assets/services/block-walls-testimonial.jpg";
import paverPatios from "@/assets/services/paver-patios.jpg";
import poolDecks from "@/assets/services/pool-decks.jpg";
import outdoorKitchens from "@/assets/services/outdoor-kitchens.jpg";
import firePits from "@/assets/services/fire-pits.jpg";
import plantInstallation from "@/assets/services/plant-installation.jpg";
import sodSeeding from "@/assets/services/sod-seeding.jpg";
import landscapeLighting from "@/assets/services/landscape-lighting.jpg";

export interface ServiceData {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  seoTitle: string;
  h1: string;
  subheadline: string;
  bodyParagraphs: string[];
  trustSignals: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  ctaText: string;
  relatedSlugs: string[];
  processSteps?: { num: string; title: string; desc: string }[];
  testimonial?: { quote: string; attribution: string };
  ctaHeading?: string;
  urgencyText?: string;
  heroImage?: string;
  testimonialImage?: string;
}

export const services: ServiceData[] = ([
  {
    slug: "grading-solutions",
    name: "Grading Solutions",
    tagline: "Precision site engineering for exceptional estates",
    image: gradingSolutions,
    heroImage: "https://pccmxdlkaklgctldxznm.supabase.co/storage/v1/object/public/site-assets/heroes/grading-solutions.png",
    seoTitle: "Luxury Grading Services Greenville SC | Elevation Landscapes",
    h1: "Luxury Grading Services in Greenville, SC — Precision Site Engineering for the Discerning Estate",
    subheadline: "The landscape you envision begins beneath the surface. Professional grading solutions engineered to perform with the same exactitude your property reflects above ground.",
    bodyParagraphs: [
      "The foundation of every extraordinary landscape is invisible — it lives beneath the surface, in the deliberate shaping of the land. Our luxury grading services exist at the intersection of engineering precision and aesthetic vision, transforming raw or problematic terrain into the seamless canvas your property deserves.",
      "Greenville and Upstate South Carolina present unique topographical realities. From rolling piedmont soils near Travelers Rest to clay-heavy terrain in neighborhoods like Augusta Road and Verdae, every estate carries its own challenges. Our team reads the land with fluency from years of work across this geography — designing grading solutions in harmony with it.",
      "Professional landscape grading begins with thorough site assessment — drainage patterns, soil composition, slope ratios, and intended use of every zone. That informs a precise grading plan accounting for water behavior during heavy Upstate rainfall, how land settles, and how future hardscape or softscape will perform for decades.",
      "Our work encompasses soil stabilization, engineered drainage, and meticulous land leveling for pools, motor courts, outdoor living structures, and manicured lawns. We do not grade to code — we grade to the standard your property demands. Every slope calculated. Every transition refined.",
      "Working exclusively in luxury residential, we bring intentionality to estate site preparation that general contractors rarely offer. We coordinate with your architect, civil engineer, and design team so the grading phase aligns with every downstream element. Nothing left to assumption.",
      "The value shows in the years that follow — retaining walls remain plumb, lawns drain without pooling, hardscape holds grade, and foundations stay protected from erosive forces compromising so many Upstate SC properties. The quiet confidence of getting the groundwork right."
    ],
    trustSignals: [
      { title: "Exclusive Luxury Focus", description: "Curated clientele, no commercial or production work" },
      { title: "Regional Soil Expertise", description: "Decades with Greenville's piedmont soils and topography" },
      { title: "Senior-Led Projects", description: "Every project managed by a senior member accountable to the homeowner" },
      { title: "Design Team Integration", description: "Seamless collaboration with architects, engineers, and designers" },
      { title: "Proven Portfolio", description: "Luxury estates across Greenville's most distinguished neighborhoods" },
      { title: "Lasting Guarantee", description: "Compaction verification and comprehensive grade integrity warranty" }
    ],
    processSteps: [
      { num: "01", title: "Site Assessment", desc: "Drainage, soil composition, slopes, and intended use evaluated to inform every grading decision." },
      { num: "02", title: "Precision Plan", desc: "Engineered for water behavior, settling, and future installations — every slope and transition specified." },
      { num: "03", title: "Expert Execution", desc: "Stabilization, drainage engineering, and meticulous leveling performed with senior-level oversight." },
      { num: "04", title: "Verification", desc: "Compaction testing and grade confirmation before handoff — ensuring everything performs as designed." }
    ],
    testimonial: {
      quote: "We had drainage issues for years. Elevation regraded our property and the difference is night and day — no pooling, no erosion. They understood exactly what our land needed.",
      attribution: "Robert & Anne M., Verdae"
    },
    faqs: [
      { question: "How long does professional grading take on a luxury property?", answer: "Two to four days for single-zone land leveling. Several weeks for comprehensive estate site preparation with drainage engineering and multi-phase grading. Detailed schedule at consultation." },
      { question: "Why does Greenville grading require specialized expertise?", answer: "Upstate SC's piedmont soils — especially red clay — are highly susceptible to erosion and compaction. Improper grading causes drainage failures, foundation movement, and instability. We design for how local soils behave through wet winters and dry summers." },
      { question: "What warranty do you offer?", answer: "Compaction verification, erosion control measures, and project warranty covering grade integrity and drainage performance. Proven stabilization methods with clear terms in every agreement." },
      { question: "Can you coordinate with my architect or engineer?", answer: "Yes, and we recommend it. We regularly integrate grading plans with broader project documentation, eliminating redundant work and reducing change orders." },
      { question: "How does grading protect my foundation?", answer: "Correct slope ratios direct water away from structures. With subsurface drainage where warranted, we eliminate conditions causing foundation stress, erosion, and hardscape failure." },
      { question: "Is grading only for new construction?", answer: "No — we regularly perform corrective grading on established estates where drainage shifted, new construction altered hydrology, or homeowners are preparing for pools, guest houses, or outdoor living additions." }
    ],
    ctaHeading: "Ready to Build on a Foundation as Refined as Your Vision?",
    ctaText: "Every grading project we undertake is engineered for the specific property it serves. Schedule a private site consultation to discuss what your land needs.",
    urgencyText: "We limit our calendar to ensure every client gets the attention their property merits — contact us today.",
    relatedSlugs: ["underground-drainage-solutions", "sod-and-seeding", "boulder-retaining-walls"]
  },
  {
    slug: "underground-drainage-solutions",
    name: "Underground Drainage",
    tagline: "Engineering that protects what you've built",
    image: undergroundDrainage,
    heroImage: "https://pccmxdlkaklgctldxznm.supabase.co/storage/v1/object/public/site-assets/heroes/underground-drainage.png",
    seoTitle: "Underground Drainage Solutions Greenville SC | Elevation Landscapes",
    h1: "Underground Drainage Solutions in Greenville, SC — Engineering That Protects What You've Built",
    subheadline: "Precision-engineered French drain systems and stormwater management for Greenville's most distinguished residential properties.",
    bodyParagraphs: [
      "Greenville's Piedmont climate doesn't forgive poorly managed stormwater. Heavy seasonal rains, naturally sloped terrain, and dense clay subsoils create conditions where chronic drainage failure isn't a possibility — it's an inevitability without professional intervention. French drain installation in Greenville requires understanding these unique regional challenges.",
      "We treat water management as a foundational design discipline — integrating French drains, channel drainage, and subsurface water diversion into the landscape plan invisibly and permanently. Every project starts with comprehensive site analysis: topographic grade evaluation, soil composition testing, impervious surface ratios, and seasonal water flow patterns.",
      "Our luxury property drainage systems use schedule-rated perforated pipe bedded in correct aggregate and wrapped in high-performance filter fabric. For complex properties, we design dry creek beds that double as landscape features, subsurface retention chambers for volume management, and pop-up emitters that discharge water away from living areas.",
      "As a yard drainage contractor serving Upstate SC, our stormwater management systems are designed to handle the region's most demanding weather events while remaining completely invisible. Erosion prevention starts with proper engineering, not reactive measures.",
      "The result is a property that performs flawlessly through every season — no pooling, no erosion, no foundation concerns. Just a landscape that looks extraordinary above ground because it's engineered with equal precision below."
    ],
    trustSignals: [
      { title: "Decade of Experience", description: "Over a decade of exclusive luxury residential drainage experience" },
      { title: "Professional Materials", description: "Schedule-rated pipe, commercial aggregate, high-performance filter fabric" },
      { title: "Custom Engineering", description: "Comprehensive site analysis and custom engineering on every project" },
      { title: "Design-First Approach", description: "Integrating drainage seamlessly into landscape plans" },
      { title: "Referral-Built Reputation", description: "Reputation built entirely on referrals from satisfied clients" },
      { title: "Lasting Protection", description: "Comprehensive system warranty with post-installation performance verification" }
    ],
    faqs: [
      { question: "How long does French drain installation take?", answer: "1-3 days for most properties; larger estates with integrated stormwater systems may take longer depending on complexity and site conditions." },
      { question: "What drainage challenges are specific to Greenville?", answer: "Piedmont clay resists water infiltration, causing rapid surface runoff and root zone saturation that damages plantings, erodes soil, and threatens foundations." },
      { question: "How long does a drainage system last?", answer: "Decades with proper engineering and professional-grade materials. Our systems are designed for permanence, not temporary relief." },
      { question: "Will installation disrupt my existing landscape?", answer: "No — systems are fully below grade with any surface elements integrated intentionally into the landscape design. We restore all disturbed areas to pristine condition." },
      { question: "Can poor drainage affect my foundation?", answer: "Yes — hydrostatic pressure from saturated soil and poor surface drainage compromise footings and below-grade structures, leading to costly structural repairs." },
      { question: "What's the first step?", answer: "A comprehensive site consultation and diagnostic assessment. We evaluate your property's specific conditions before recommending any solution." }
    ],
    ctaText: "Our project calendar fills quickly, especially in spring and fall. Reach out today to schedule a private consultation.",
    relatedSlugs: ["grading-solutions", "irrigation-installation-repair", "boulder-retaining-walls"]
  },
  {
    slug: "irrigation-installation-repair",
    name: "Irrigation Install & Repair",
    tagline: "Engineered for the landscape you've built",
    image: irrigation,
    heroImage: "https://pccmxdlkaklgctldxznm.supabase.co/storage/v1/object/public/site-assets/heroes/irrigation.png",
    seoTitle: "Irrigation Installation Greenville SC | Elevation Landscapes",
    h1: "Irrigation Installation in Greenville SC Engineered for the Landscape You Have Built",
    subheadline: "Precision irrigation for discerning homeowners — because an extraordinary landscape demands water management built to the same exacting standard.",
    bodyParagraphs: [
      "A beautifully designed landscape is only as enduring as the system sustaining it. Our irrigation installation services are engineered to protect that investment — delivering precision water management keeping every lawn, garden bed, and hardscape border in peak condition through every Greenville season.",
      "Our approach begins with thorough site assessment — topography, soil composition, plant material, and sun exposure. Greenville's rolling terrain and varied microclimates demand more than a standard grid. We design custom zone management systems ensuring each area receives precisely the water it needs, no more, no less.",
      "For curated gardens, mature specimens, or newly established beds, we integrate custom drip irrigation delivering moisture directly to root zones with zero waste. Nearly invisible once installed, these systems preserve the clean aesthetic luxury landscapes demand while extending the life of your plantings.",
      "Our smart irrigation systems bring intelligence older timers cannot match. Smart water controllers connect to local weather data, adjusting run times for rainfall, evapotranspiration, and seasonal shifts. Never over-watered after a Greenville thunderstorm or left dry in a summer drought — the system adapts on your behalf.",
      "When existing systems underperform, our sprinkler repair services restore efficiency without full replacement disruption. We diagnose pressure issues, failed heads, cracked laterals, and controller malfunctions with the same rigor as new installations — a luxury property deserves a fully functional system at every stage.",
      "Every component is professional-grade — quiet operation, years of calibration, clean integration with any aesthetic. Our installation practices include precise trenching, exact head placement, and meticulous backfill restoring your lawn and beds to pristine condition."
    ],
    trustSignals: [
      { title: "Decade of Luxury Focus", description: "Exclusive residential landscapes across Greenville and Upstate SC" },
      { title: "Certified Professionals", description: "Systems designed for Upstate SC's specific climate and soil" },
      { title: "Professional-Grade Equipment", description: "Industry-leading manufacturers for durability and performance" },
      { title: "Pristine Restoration", description: "Lawns and gardens returned to pre-work condition" },
      { title: "Warranties & Maintenance", description: "Workmanship coverage plus seasonal service programs" },
      { title: "Smart Technology", description: "Weather-responsive controllers with real-time data for precision water management" }
    ],
    processSteps: [
      { num: "01", title: "Site Assessment", desc: "Topography, soil, plants, sun exposure, and microclimates evaluated to inform every design decision." },
      { num: "02", title: "Custom Zone Design", desc: "Drip, rotary, and smart controller integration — each zone calibrated for its specific conditions." },
      { num: "03", title: "Expert Installation", desc: "Clean trenching, precise head placement, and full lawn and garden restoration." },
      { num: "04", title: "Ongoing Support", desc: "Seasonal adjustments and responsive service keeping your system at peak performance." }
    ],
    testimonial: {
      quote: "Elevation redesigned our irrigation with smart controllers and drip zones. Water bill dropped and the landscape has never looked better.",
      attribution: "Jennifer & Mark H., North Main"
    },
    faqs: [
      { question: "How do you approach irrigation design for a luxury property?", answer: "Comprehensive on-site assessment of layout, plants, soil, and sun patterns, then a custom zone management plan integrating with your landscape and hardscape." },
      { question: "Why is smart irrigation important in Greenville?", answer: "Humid summers, periodic drought, and heavy rainfall demand adaptive systems. Smart water controllers auto-adjust to conditions, reducing waste and preventing disease-causing overwatering." },
      { question: "Smart vs conventional sprinkler system?", answer: "Smart systems pull real-time weather data to adjust schedules automatically. Conventional runs fixed regardless of conditions. Result: healthier landscape, lower water use, hands-off confidence." },
      { question: "Is drip irrigation good for established gardens?", answer: "Ideal — delivers water directly to root zones through concealed low-flow emitters. Perfect for estate beds, ornamentals, and hedgerows with zero visual impact." },
      { question: "My system underperforms — do I need full replacement?", answer: "Often not. Pressure problems, broken heads, and controller issues frequently resolve through targeted repair. We diagnose thoroughly and present the most effective path first." },
      { question: "Warranty and maintenance?", answer: "Workmanship warranty on every installation plus seasonal service programs for peak efficiency through Greenville's warm and cool transitions." }
    ],
    ctaHeading: "Ready for Irrigation That Matches Your Landscape's Standard?",
    ctaText: "Every irrigation system we design is engineered for the specific property it serves. Schedule a consultation to discuss what your landscape needs.",
    urgencyText: "Contact us today — extraordinary properties require extraordinary stewardship.",
    relatedSlugs: ["sod-and-seeding", "new-plant-installation", "landscape-remediation"]
  },
  {
    slug: "landscape-remediation",
    name: "Landscape Remediation",
    tagline: "Restoring the standard your property deserves",
    image: landscapeRemediation,
    heroImage: "https://pccmxdlkaklgctldxznm.supabase.co/storage/v1/object/public/site-assets/heroes/landscape-remediation.png",
    seoTitle: "Landscape Remediation Greenville SC | Elevation Landscapes",
    h1: "Landscape Remediation in Greenville, SC — Restoring the Standard Your Property Deserves",
    subheadline: "When a landscape falls short, the right firm reimagines it. Surgical precision and refined design for every restoration across Greenville and Upstate South Carolina.",
    bodyParagraphs: [
      "Some landscapes are built once and forgotten. Others are built once and then entrusted to us. Our remediation service restores order, intention, and enduring beauty to outdoor spaces that time, weather, or previous contractors left behind.",
      "Greenville and Upstate South Carolina's climate is both gift and challenge. The long growing season that makes this region lush also accelerates overgrowth, root encroachment, and soil degradation. We understand how this climate behaves — humid summers, unexpected Upstate frosts — and make remediation decisions that hold long after our trucks leave.",
      "Our process begins with comprehensive site assessment. We evaluate soil and amend where necessary, because no premium plantings perform on compromised ground. We identify what to preserve — mature trees, established hedgerows, solid hardscape — and remove what works against the property. This is not teardown. It is curatorial.",
      "Our design team develops a restoration plan respecting your architecture, neighborhood character, and vision. Plant replacement decisions are made for long-term performance, seasonal interest, and cohesion — not what a supplier has that week. We source from specialty growers and install with care reflecting your investment.",
      "Soil amendment is a cornerstone. Healthy soil is not incidental to a thriving landscape — it is the foundation. We conduct targeted amendments based on actual analysis and establish irrigation and drainage protecting that work for years.",
      "The result is not a cleaner yard. It is a landscape that functions as it should, looks as it should, and reflects the home it surrounds. For luxury homeowners across Greenville, Travelers Rest, and Simpsonville, that standard is non-negotiable — and neither is ours."
    ],
    trustSignals: [
      { title: "Decade of Luxury Experience", description: "Exclusive residential work across Greenville and Upstate SC" },
      { title: "Curated Portfolio", description: "High-end remediation on the region's most distinguished residences" },
      { title: "Certified Designers & Horticulturists", description: "Deep Upstate SC climate and soil knowledge" },
      { title: "Specialty Plant Sourcing", description: "Premium material from vetted growers with establishment warranty" },
      { title: "Referral-Built Reputation", description: "Trust earned entirely through results and repeat business" },
      { title: "Post-Project Care", description: "Ongoing maintenance agreements ensuring your investment continues to thrive" }
    ],
    processSteps: [
      { num: "01", title: "Site Assessment", desc: "Soil analysis, drainage, plant and hardscape inventory to understand the full scope of restoration needed." },
      { num: "02", title: "Curatorial Plan", desc: "What to preserve, remove, and introduce — a restoration plan respecting your architecture and vision." },
      { num: "03", title: "Restoration & Planting", desc: "Amendment, specialty installation, and irrigation integration executed with meticulous care." },
      { num: "04", title: "Establishment Support", desc: "Warranty, care guidance, and optional maintenance program to ensure long-term success." }
    ],
    testimonial: {
      quote: "Our yard was neglected for years. Elevation identified what was worth saving and completely transformed it. It finally matches the house.",
      attribution: "Thomas & Sarah K., Chanticleer"
    },
    faqs: [
      { question: "How long does landscape remediation take?", answer: "Most projects range one to four weeks of active work. Thorough assessment first so you have a detailed schedule before anything begins." },
      { question: "Will you remove everything or preserve elements?", answer: "Preservation is a guiding principle. Mature trees, specimen plants, and solid hardscape often hold significant value. Our assessment distinguishes what stays from what goes." },
      { question: "Why does local expertise matter for remediation?", answer: "Clay soils, specific pest pressures, and variable Upstate microclimates factor into every plant selection, soil amendment, and drainage decision. Regional experience means your landscape thrives here, not just survives." },
      { question: "What does soil amendment involve?", answer: "Analysis of pH, compaction, nutrients, and drainage, then professional-grade amendments. This separates landscapes thriving for decades from those declining after one season." },
      { question: "Warranty or ongoing maintenance?", answer: "Comprehensive plant establishment warranty plus maintenance agreements. Our remediated landscapes are designed to be self-sustaining with appropriate care." },
      { question: "How is pricing determined?", answer: "Reflects scope, scale, and condition. Accurate estimates from proper assessment, not generic quotes. Clients consistently find it worthwhile for the transformation and long-term property value." }
    ],
    ctaHeading: "Ready to Restore the Landscape Your Property Deserves?",
    ctaText: "Every remediation project we undertake is designed for the specific property it serves. Schedule a private consultation to discuss what your landscape needs.",
    urgencyText: "Limited remediation projects each season — call today for your consultation.",
    relatedSlugs: ["new-plant-installation", "sod-and-seeding", "irrigation-installation-repair"]
  },
  {
    slug: "custom-water-features",
    name: "Custom Water Features",
    tagline: "Designed for properties that demand something extraordinary",
    image: waterFeatures,
    heroImage: "https://pccmxdlkaklgctldxznm.supabase.co/storage/v1/object/public/site-assets/heroes/water-features.png",
    seoTitle: "Custom Water Features Greenville SC | Elevation Landscapes",
    h1: "Custom Water Features Greenville SC — Designed for Properties That Demand Something Extraordinary",
    subheadline: "Bespoke water features — from natural stone waterfalls to custom koi ponds — bringing enduring beauty, movement, and refinement to the finest properties in Greenville and Upstate South Carolina.",
    bodyParagraphs: [
      "The finest outdoor living spaces share a common element — the sound, movement, and visual depth of a masterfully designed water feature. At Elevation Landscapes, we design and build custom water features that are not simply installed but composed, with intentionality honoring both terrain and the aesthetic vision of each homeowner.",
      "Our approach begins long before the first stone is placed. We study how you live outdoors, how your property moves with light, and where water creates the greatest impact. Whether you envision a natural stone waterfall cascading into a recirculating pool, a custom fountain anchoring a formal garden, or a professionally designed koi pond, we bring the same depth of craft to every commission.",
      "Material selection separates our work from the ordinary. We source premium quartzite, bluestone, fieldstone, and locally sourced Upstate SC granite — chosen for visual character and structural integrity. Every recirculating system is engineered for efficiency, longevity, and near-silent operation, so the only sound is water moving precisely as intended.",
      "Our aquatic design process is comprehensive — site grading, structural basin construction, pump and filtration integration, water-adjacent planting design, and final hand-placement of every stone. Nothing templated. The water feature that emerges exists nowhere else in the world.",
      "Greenville's four-season climate offers remarkable opportunity. Sloped properties become canvases for tiered waterfall sequences. Level lots suit reflecting pools and formal fountains commanding attention from every vantage. We design for your specific site so what we build looks as though it has always belonged there.",
      "A custom water feature is the finishing element that transforms a beautiful yard into a private retreat. Moving water softens ambient noise, draws the eye, and creates the sensation of remove that distinguishes a truly exceptional outdoor environment from one that simply photographs well."
    ],
    trustSignals: [
      { title: "Decade of Luxury Focus", description: "Exclusive residential projects including the region's most distinguished estates" },
      { title: "Premium Stone & Systems", description: "Natural stone and high-performance recirculating systems for longevity" },
      { title: "Fully Integrated Build", description: "Site assessment through final stone placement under complete quality control" },
      { title: "Limited Project Model", description: "Only projects we can execute with full attention" },
      { title: "Comprehensive Warranty", description: "Written coverage on structural and mechanical components" },
      { title: "Seasonal Maintenance", description: "Comprehensive care programs for year-round water feature performance" }
    ],
    processSteps: [
      { num: "01", title: "Vision Consultation", desc: "Lifestyle, light patterns, and design goals evaluated on-site to understand where water creates the greatest impact." },
      { num: "02", title: "Aquatic Design", desc: "Basin, pump, filtration, and stone composition engineering — every element specified for your unique property." },
      { num: "03", title: "Master Installation", desc: "Hand-place every stone, integrate planting and mechanical systems with meticulous craftsmanship." },
      { num: "04", title: "Seasonal Guidance", desc: "Maintenance protocols for year-round performance so your water feature thrives across every season." }
    ],
    testimonial: {
      quote: "The waterfall is the centerpiece of our backyard. The stone work, the sound, the way it catches evening light — genuinely extraordinary.",
      attribution: "Michael & Karen S., Travelers Rest"
    },
    faqs: [
      { question: "How long does it take to design and install a custom water feature?", answer: "Custom fountains or smaller features typically require four to eight weeks. Fully integrated koi ponds or multi-tier natural stone waterfalls may take ten to sixteen weeks." },
      { question: "How does Greenville's climate affect a water feature?", answer: "We design all recirculating systems with freeze-resistant plumbing, properly specified pumps, and drainage provisions protecting your investment through Upstate SC's full seasonal range." },
      { question: "What is the typical investment range?", answer: "Refined custom fountains typically begin in the mid five figures. Koi ponds, large-scale waterfalls, or multi-element installations may represent significantly more. Transparent pricing before work begins." },
      { question: "How much maintenance is required?", answer: "Minimal for properly designed systems — periodic filter cleaning, pump inspection, and water chemistry for ponds. We offer ongoing maintenance programs." },
      { question: "Do you design and install koi ponds?", answer: "Yes — with appropriate depth, biological filtration, UV clarification, and planting schemes supporting fish health and water clarity. A living ecosystem and one of the most dynamic outdoor features we create." },
      { question: "Can a water feature integrate into existing hardscape?", answer: "We frequently integrate into patios, outdoor kitchens, pool surrounds, and formal gardens. Features designed in concert with surrounding hardscape achieve cohesion standalone installations cannot." }
    ],
    ctaHeading: "Ready to Discover What a Custom Water Feature Could Bring to Your Property?",
    ctaText: "Every water feature we create is a one-of-a-kind composition — engineered for your property, your lifestyle, and the Upstate climate. Schedule a private consultation to explore what's possible.",
    urgencyText: "Availability is limited by design — call today to schedule your consultation.",
    relatedSlugs: ["natural-stone-staircases", "landscape-lighting", "paver-patios"]
  },
  {
    slug: "natural-stone-staircases",
    name: "Natural Stone Staircases",
    tagline: "Crafted for the exceptional home",
    image: stoneStaircases,
    heroImage: "https://pccmxdlkaklgctldxznm.supabase.co/storage/v1/object/public/site-assets/heroes/stone-staircases.png",
    seoTitle: "Natural Stone Staircases Greenville SC | Elevation Landscapes",
    h1: "Natural Stone Staircases in Greenville, SC Crafted for the Exceptional Home",
    subheadline: "Custom stone staircases combining the permanence of master masonry with materials sourced for beauty, character, and longevity. Where landscape design becomes architecture.",
    bodyParagraphs: [
      "Few landscape elements carry the quiet authority of a natural stone staircase. Where concrete crumbles and wood weathers, stone endures — becoming the first impression your property makes, the feature guests pause to admire, and the detail distinguishing a designed landscape from a merely maintained one.",
      "Every project begins with conversation — how you move through your property, how you entertain, what the land asks for. Our designers study grades, sight lines, and architectural language before a stone is selected. This is bespoke craftsmanship applied to the outdoors.",
      "The materials are among the finest available. Bluestone treads bring timeless formality with dense surface and refined charcoal tones. Appalachian fieldstone carries raw Carolina foothills character. Flagstone — Pennsylvania blue, Crab Orchard, Tennessee sandstone — offers range from rustic woodland warmth to contemporary precision. We source selectively, rejecting material failing our standards for color, integrity, and Upstate climate performance.",
      "Our masonry crews are veterans, not subcontractors. They understand proper base depth, drainage management, and mortaring techniques moving with seasonal expansion rather than against it. The result holds form through decades of freeze-thaw, heavy rains, and daily use.",
      "Greenville homeowners along Augusta Road, Paris Mountain, and the broader Upstate corridor recognize outdoor work that harmonizes with regional beauty. A flagstone staircase installation here is not an amenity — it is an investment in your property's coherence and the daily experience of living beautifully within it.",
      "From site assessment through final inspection, we manage completely, coordinate with your architect when relevant, and do not consider work finished until the outcome exceeds expectations. That is our reputation, and we protect it on every job site."
    ],
    trustSignals: [
      { title: "15+ Years Luxury Hardscape", description: "Exclusive residential focus throughout Greenville and Upstate SC" },
      { title: "Prestigious Portfolio", description: "Staircases across Augusta Road, Paris Mountain, and greater Greenville" },
      { title: "Quarry-Direct Sourcing", description: "Domestic quarries, stones selected in person for integrity and performance" },
      { title: "In-House Masonry", description: "Veteran crews, zero subcontracting" },
      { title: "Installation Warranty", description: "Comprehensive coverage backed by referral-built reputation" },
      { title: "Structural Longevity", description: "Engineered bases and drainage systems ensuring decades of performance" }
    ],
    processSteps: [
      { num: "01", title: "Site & Architecture Study", desc: "Grades, sight lines, and material palette evaluated to inform every design decision." },
      { num: "02", title: "Stone Selection", desc: "Bluestone, flagstone, and fieldstone options matched to your home's architecture and landscape character." },
      { num: "03", title: "Master Masonry", desc: "Proper base, drainage, and mortaring for permanent integrity — executed by veteran in-house crews." },
      { num: "04", title: "Final Walkthrough", desc: "Inspect every tread, joint, and transition together until every detail meets our shared standard." }
    ],
    testimonial: {
      quote: "The bluestone staircase from our motor court to the garden is the most commented-on feature of our property. Craftsmanship is extraordinary.",
      attribution: "William & Diana P., Augusta Road"
    },
    faqs: [
      { question: "How long does installation take?", answer: "One to three weeks on-site, plus two to four weeks for design and sourcing. We never rush masonry — the result is always worth proper time." },
      { question: "What stone types do you recommend for Greenville?", answer: "Bluestone for formal entries. Flagstone varieties for versatility across traditional and contemporary architecture. Appalachian fieldstone for naturalistic settings integrating with Upstate SC's native landscape." },
      { question: "How much maintenance is required?", answer: "Very little — periodic inspection, light pressure washing, sealing every few years. We provide a care guide specific to your materials." },
      { question: "Are there climate considerations for Upstate SC?", answer: "Freeze-thaw cycles stress improperly installed stonework. We engineer deep compacted bases, incorporate drainage, and use flexible mortar formulations — a critical reason to choose a local stone stair contractor." },
      { question: "What does a custom stone staircase cost?", answer: "Varies by length, elevation, stone, and site complexity. Detailed transparent proposals after consultation." },
      { question: "Can it integrate with existing landscape design?", answer: "Integrated design produces our best work. Staircases connect terraces, walls, water features, and planting beds. We coordinate with architects and designers for seamless alignment." }
    ],
    ctaHeading: "Ready for a Staircase as Refined as the Home It Serves?",
    ctaText: "Every staircase we build is crafted for the specific property it serves. Schedule a consultation to explore what's possible.",
    urgencyText: "Limited projects each season — reach out today to begin.",
    relatedSlugs: ["custom-stone-pathways", "boulder-retaining-walls", "landscape-lighting"]
  },
  {
    slug: "custom-stone-pathways",
    name: "Custom Stone Pathways",
    tagline: "Crafted for properties that demand more",
    image: stonePathways,
    heroImage: "https://pccmxdlkaklgctldxznm.supabase.co/storage/v1/object/public/site-assets/heroes/stone-pathways.png",
    seoTitle: "Custom Stone Pathways Greenville SC | Elevation Landscapes",
    h1: "Custom Stone Pathways Greenville SC — Crafted for Properties That Demand More",
    subheadline: "Bespoke natural stone pathways for Greenville and Upstate South Carolina's most distinguished residences — where every step reflects the character and quality of the home it serves.",
    bodyParagraphs: [
      "There is a certain language spoken by a beautifully crafted stone pathway — one that communicates intention, permanence, and refined taste. At Elevation Landscapes, our custom stone pathways are designed for homeowners who understand the journey through a property is just as important as the destination.",
      "We work exclusively with luxury residential clients across Greenville and Upstate SC, so every project receives our full creative and technical attention. A custom stone pathway from us is not a catalog selection — it is a considered collaboration between your landscape, your home's aesthetic, and the natural character of the stone itself.",
      "Our design process begins with an in-depth site consultation. We evaluate grade transitions, drainage patterns, natural sightlines, and pedestrian flow across your property. We study how morning light falls across stone, how traffic naturally moves, and where a slight curve or material change creates visual pause. This landscape connectivity is the foundation of every pathway we design.",
      "We source hand-selected flagstone, tumbled bluestone, Tennessee crab orchard, and locally sourced quartzite — chosen for texture, color depth, and durability in the Upstate climate. Whether you prefer rustic warmth of a dry-laid flagstone pathway through a naturalistic garden or precise geometry of cut bluestone in a formal entry, our team executes with exactness.",
      "Technical excellence is embedded in everything we build. Pathways are constructed with properly compacted base layers and finished using permeable jointing compounds or hand-packed polymeric sand — ensuring structural integrity, weed resistance, and natural drainage without compromising refinement.",
      "The result elevates the entire property — extending curb presence, enriching outdoor living flow, and adding architectural sophistication no poured concrete can replicate. For homeowners across Greenville, Travelers Rest, and Simpsonville investing in properties reflecting their highest standards, a natural stone path installation is one of the most enduring improvements you can make."
    ],
    trustSignals: [
      { title: "15+ Years Luxury Hardscape", description: "Exclusive residential experience across Greenville and Upstate SC" },
      { title: "Certified Professionals", description: "Trained in dry-laid stone and modern permeable jointing" },
      { title: "Curated Stone Sourcing", description: "Premier quarries with selections unavailable through standard contractors" },
      { title: "Prestigious Portfolio", description: "Projects spanning North Main, Augusta Road, and the Cliffs" },
      { title: "Craftsmanship Warranty", description: "Comprehensive coverage on materials and workmanship" },
      { title: "Integrated Design", description: "Pathways designed to connect and unify your entire outdoor living environment" }
    ],
    processSteps: [
      { num: "01", title: "Design Consultation", desc: "Grade, drainage, sightlines, and pedestrian flow" },
      { num: "02", title: "Material Selection", desc: "Premium stone options matched to your architecture" },
      { num: "03", title: "Precision Installation", desc: "Compacted base, expert setting, permeable jointing" },
      { num: "04", title: "Final Reveal", desc: "Walk the pathway together, confirm every detail" }
    ],
    testimonial: {
      quote: "The flagstone pathway completely changed how we experience our property. Every curve and stone feels deliberate and beautiful.",
      attribution: "Catherine L., Augusta Road"
    },
    faqs: [
      { question: "What types of natural stone do you use for custom pathways?", answer: "Hand-selected flagstone, Tennessee crab orchard, tumbled bluestone, and locally sourced quartzite. The right material depends on your architecture, landscape, and use — we guide you through options at consultation." },
      { question: "How long does a custom stone pathway installation take?", answer: "Most luxury installations range from three to ten business days depending on scope and complexity. We communicate timelines clearly before work begins." },
      { question: "How do pathways hold up in Greenville's climate?", answer: "Engineered for summer heat, seasonal rain, and winter freezing — compacted gravel bases, appropriate stone thickness, and permeable jointing that allows drainage and resists frost movement." },
      { question: "What is the difference between dry-laid stone and permeable jointing?", answer: "Dry-laid stone sits on compacted gravel without mortar, allowing natural flex and drainage. Permeable jointing locks joints while still allowing water permeation. Both suit luxury installations depending on design goals." },
      { question: "How much maintenance does a stone pathway require?", answer: "Among the lowest-maintenance hardscape investments. Periodic sweeping, occasional rinsing, and jointing reapplication every several years." },
      { question: "Can a pathway integrate into a larger landscape design?", answer: "Our most compelling projects connect motor courts to gardens, pool terraces to guest structures, and residences to outbuildings. Pathways designed with lighting, planting, and hardscape always achieve the most cohesive result." }
    ],
    ctaHeading: "Ready for a Pathway That Reflects Exactly Who You Are?",
    ctaText: "Contact us today to schedule your private design consultation and discover how a custom stone pathway can transform your property.",
    urgencyText: "We accept limited projects each season — reach out today.",
    relatedSlugs: ["natural-stone-staircases", "paver-patios", "landscape-lighting"]
  },
  {
    slug: "boulder-retaining-walls",
    name: "Boulder Retaining Walls",
    tagline: "Engineered for the land, built to last generations",
    image: boulderWalls,
    heroImage: "https://pccmxdlkaklgctldxznm.supabase.co/storage/v1/object/public/site-assets/heroes/boulder-walls.png",
    seoTitle: "Boulder Retaining Walls Greenville SC | Elevation Landscapes",
    h1: "Boulder Retaining Walls Greenville SC — Engineered for the Land, Built to Last Generations",
    subheadline: "Natural boulder retaining walls for discerning homeowners across Greenville and Upstate South Carolina — where structural integrity and refined craftsmanship are never mutually exclusive.",
    bodyParagraphs: [
      "In Greenville and across Upstate South Carolina, rolling grades, wooded slopes, and dramatic elevation changes define the area's most prestigious properties. But unmanaged terrain erodes, shifts, and quietly undermines the landscape investment you have worked to build.",
      "We engineer and install boulder retaining walls that become defining features of the property — massive, ancient-looking structures of carefully selected natural stone that speak to permanence and craftsmanship rarely seen in residential work.",
      "Every natural boulder wall installation begins with thorough site study — soil composition, drainage patterns, grade elevation, and visual landscape flow. Each is grounded in gravity wall engineering principles, ensuring the mass and placement of every stone contributes to a structure as functionally stable as it is visually striking.",
      "The boulders we source are chosen for character, scale, and geological integrity. Our teams read each stone — which face belongs forward, how weight distributes, where negative space adds to the composition. The result is a hillside boulder wall that looks less installed and more discovered.",
      "Slope stabilization is often the catalyst, but rarely the only reason clients invest. A well-designed boulder wall creates usable terraced space from unusable slope, anchors surrounding plantings and outdoor living areas, and adds architectural permanence to Greenville's most sought-after estate communities.",
      "We take a limited number of projects annually, ensuring every installation receives our most experienced craftsmen from site evaluation through final stone placement. When we leave, the wall is finished — not nearly finished."
    ],
    trustSignals: [
      { title: "Estate-Scale Experience", description: "Over a decade of exclusive luxury residential work" },
      { title: "Gravity Wall Engineering", description: "Site-specific drainage and soil assessment before any stone is placed" },
      { title: "Hand-Selected Stone", description: "Premium boulders chosen for integrity, scale, and character" },
      { title: "Dedicated Attention", description: "Limited roster ensuring our top team on your project" },
      { title: "Craftsmanship Guarantee", description: "Warranty with ongoing post-completion support" },
      { title: "Post-Completion Walkthrough", description: "Every project concludes with a detailed on-site review to ensure complete satisfaction" }
    ],
    processSteps: [
      { num: "01", title: "Site Study", desc: "Soil, drainage, grade, and landscape flow" },
      { num: "02", title: "Stone Sourcing", desc: "Hand-select boulders for character and structural fit" },
      { num: "03", title: "Expert Placement", desc: "Gravity engineering with veteran crews" },
      { num: "04", title: "Final Inspection", desc: "Walk every detail together" }
    ],
    testimonial: {
      quote: "The boulder wall looks like it has been part of our hillside forever. Scale and craftsmanship are extraordinary.",
      attribution: "Patricia W., Paris Mountain"
    },
    faqs: [
      { question: "How long does boulder retaining wall installation take?", answer: "Most residential projects run one to three weeks. Larger estates with multiple tiers may extend further. Detailed schedule provided during consultation." },
      { question: "How long will a natural boulder wall last?", answer: "Among the most durable residential landscape structures — routinely lasting decades. Sound gravity wall engineering, proper drainage, and quality stone are the keys, all central to our process." },
      { question: "Are there specific considerations for Upstate South Carolina?", answer: "Clay-heavy soils, variable rainfall, and freeze-thaw cycles require thoughtful drainage planning and proper stone bedding. Our methods are calibrated to these specific regional conditions." },
      { question: "What does a boulder retaining wall cost?", answer: "Varies by dimensions, stone sourcing, site conditions, and engineering. Clients should expect a meaningful investment reflecting premium materials and craftsmanship. Fully transparent pricing at consultation." },
      { question: "Will it increase my property value?", answer: "Consistently adds measurable value. Beyond stabilization, these structures bring architectural quality and visual distinction that carry significant weight in Greenville's luxury market." },
      { question: "Can it integrate with other landscape features?", answer: "Absolutely — we regularly incorporate plantings, lighting, water features, and outdoor living elements into or adjacent to boulder walls as part of a cohesive landscape composition." }
    ],
    ctaHeading: "Ready to Transform Your Terrain into Something Extraordinary?",
    ctaText: "Contact us today to schedule your private site consultation and discover how a boulder retaining wall can redefine your property.",
    urgencyText: "Our calendar fills well in advance — contact us today.",
    relatedSlugs: ["block-retaining-walls", "grading-solutions", "natural-stone-staircases"]
  },
  {
    slug: "block-retaining-walls",
    name: "Block Retaining Walls",
    tagline: "Engineered precision, refined by design",
    image: blockWalls,
    heroImage: blockWallsHero,
    testimonialImage: blockWallsTestimonial,
    seoTitle: "Block Retaining Walls Greenville SC | Elevation Landscapes",
    h1: "Block Retaining Walls Greenville SC — Engineered Precision, Refined by Design",
    subheadline: "Elevation Landscapes designs and installs block retaining walls across Greenville and Upstate South Carolina that resolve the land's challenges and redefine what your outdoor environment can become.",
    bodyParagraphs: [
      "Greenville and Upstate South Carolina's rolling terrain, mature hardwoods, and characteristic grade changes create both opportunity and complexity. When elevation shifts demand a structural solution, block retaining walls offer a seamless marriage of engineering precision and aesthetic intention.",
      "We approach every retaining wall installation as a design problem first — not simply how to hold back earth, but how to shape land to elevate the entire property. We work exclusively with premium segmental block systems selected for consistency, durability, and design breadth — clean contemporary geometry or textured traditional warmth.",
      "Structural integrity is non-negotiable. We assess soil composition, drainage patterns, and load requirements before a single block is set. For walls of significant height or hydraulic pressure, we incorporate geogrid reinforcement layers creating a mechanically stabilized earth system that performs for decades.",
      "Terraced design is where our expertise creates genuine value. Rather than treating a sloped lot as a liability, we create layered outdoor living — planting beds framed with precision, level lawn panels, and stone-accented steps moving visitors gracefully through the landscape.",
      "We source decorative block wall systems that endure Upstate SC's humidity, freeze-thaw cycles, and clay-heavy soils. Our team understands how light moves across textured block, how cap selections shift perceived style, and how integration with plantings, drainage, and lighting makes a wall feel intentional.",
      "Every installation begins with detailed consultation and concludes with a finished product as considered as every detail on your property. We do not subcontract — the craftsmen who pour footings set the final capstone."
    ],
    trustSignals: [
      { title: "Exclusive Luxury Focus", description: "High-end residential only" },
      { title: "Engineered to Your Site", description: "Soil assessment, drainage, geogrid where required" },
      { title: "Premium Materials", description: "Segmental block for integrity and refinement" },
      { title: "Zero Subcontracting", description: "Same craftsmen start to finish" },
      { title: "Full Transparency", description: "Detailed proposals, timelines, post-install support" },
      { title: "Lasting Warranty", description: "Industry-leading warranty backed by our craftsmanship guarantee" }
    ],
    faqs: [
      { question: "What does a block retaining wall cost in Greenville, SC?", answer: "Several thousand for smaller decorative walls to significantly higher for multi-tiered systems. Factors: wall height, footage, materials, site access, geogrid needs. Detailed proposals after site assessment." },
      { question: "What is the difference between a segmental retaining wall and poured concrete?", answer: "Segmental walls use interlocking block with geogrid reinforcement, offering superior design flexibility and better clay-soil performance vs monolithic concrete. Best structure-plus-aesthetics combo for Upstate SC luxury properties." },
      { question: "Are there specific challenges to retaining walls in Greenville and Upstate SC?", answer: "Expansive clay soils shifting with moisture, heavy rainfall, and freeze-thaw cycles stress improperly built walls. We incorporate drainage aggregate, weep systems, and geogrid reinforcement for long-term Greenville-climate integrity." },
      { question: "How much maintenance does a block retaining wall require?", answer: "Minimal when properly installed. Periodic inspection of wall face and drainage outlets, clearing weep holes, monitoring for settlement. We provide care guidelines specific to your installation." },
      { question: "Can a block retaining wall include built-in lighting, plantings, or steps?", answer: "Yes — our most compelling Greenville projects feature terraced systems with lighting along caps, planting beds at each tier, and natural stone steps through levels. All designed together, never as afterthoughts." },
      { question: "Do I need a permit for a retaining wall in Greenville?", answer: "Walls over four feet of exposed height typically require a permit. Greenville County and City each have requirements. We navigate the full permitting process on your behalf." }
    ],
    ctaText: "Contact us today to schedule a private consultation and discover how a precision-engineered block retaining wall can transform your Greenville property.",
    relatedSlugs: ["boulder-retaining-walls", "grading-solutions", "paver-patios"],
    processSteps: [
      { num: "01", title: "Site Assessment", desc: "Soil, grade, drainage, and vision — we evaluate every factor before recommending a solution." },
      { num: "02", title: "Custom Engineering", desc: "Wall system designed with drainage integration and geogrid reinforcement where required." },
      { num: "03", title: "Precision Installation", desc: "In-house crews execute from foundation to capstone with meticulous attention to detail." },
      { num: "04", title: "Final Walkthrough", desc: "We inspect every detail together, ensuring the finished product meets our shared standard." }
    ],
    testimonial: { quote: "The terraced wall system transformed our slope into usable outdoor living space. Engineering expertise and detail were evident from day one.", attribution: "James R., Thornblade" },
    ctaHeading: "Ready for a Retaining Wall That Performs and Elevates?",
    urgencyText: "Spring and summer slots filling — reach out today."
  },
  {
    slug: "paver-patios",
    name: "Paver Patios",
    tagline: "Crafted for the way you live outdoors",
    image: paverPatios,
    heroImage: "https://pccmxdlkaklgctldxznm.supabase.co/storage/v1/object/public/site-assets/heroes/paver-patios.png",
    seoTitle: "Paver Patios Greenville SC | Elevation Landscapes",
    h1: "Custom Paver Patios in Greenville, SC — Crafted for the Way You Live Outdoors",
    subheadline: "Bespoke paver patios where meticulous engineering and exceptional materials converge to create outdoor spaces that endure as beautifully as they are built.",
    bodyParagraphs: [
      "In Greenville and across Upstate South Carolina, outdoor living has become as carefully considered as a fine home's interior. For homeowners who refuse to compromise, a custom paver patio is a statement about how you choose to live.",
      "Every project begins with design consultation — how you use the space, your home's architecture, the grade and character of your land. Only then do we translate conversation into hardscape that feels inevitable, as though it was always meant to be there.",
      "Material selection is where vision becomes physical. We work with natural travertine, Belgian block, tumbled bluestone, and high-definition concrete pavers. Each travertine paver patio carries timeless warmth complementing Greenville's traditional and contemporary architecture. For modern refinement, large-format concrete pavers offer striking, low-maintenance surfaces performing through Upstate temperature swings.",
      "What separates a patio that endures from one failing within seasons is invisible once complete. Installation begins with methodical excavation and a properly engineered compacted aggregate base matched to your soil and load. Interlocking pavers set with precision, every joint finished with polymeric sand resisting weeds, repelling moisture, and locking the surface into a unified whole.",
      "The result extends your home's luxury into the landscape. Whether a sprawling terrace, intimate courtyard, or multi-level hardscape cascading across a slope, the space reflects intention and craftsmanship your home deserves.",
      "Greenville's outdoor season is long and beautiful. We have built our reputation project by project across Travelers Rest, Simpsonville, and the Upstate — earning trust from homeowners who understand their outdoor environment reflects the standards they hold for everything else."
    ],
    trustSignals: [
      { title: "Decade of Luxury Hardscape", description: "Exclusive residential across Greenville and Upstate SC" },
      { title: "Premium Material Access", description: "Travertine, Belgian block, large-format pavers unavailable through standard suppliers" },
      { title: "Engineered Foundations", description: "Compacted aggregate base and polymeric sand on every project" },
      { title: "Curated Portfolio", description: "High-end patios across Greenville's most prestigious neighborhoods" },
      { title: "Workmanship Warranty", description: "Dedicated management from design through walkthrough" },
      { title: "Post-Install Support", description: "Sealing programs and maintenance guidance for lasting beauty" }
    ],
    processSteps: [
      { num: "01", title: "Design Consultation", desc: "Vision, architecture, grade, and lifestyle evaluated to shape every design decision." },
      { num: "02", title: "Material Selection", desc: "Travertine, bluestone, and concrete paver options matched to your home and preferences." },
      { num: "03", title: "Precision Installation", desc: "Engineered base, expert setting, and polymeric sand finish for lasting performance." },
      { num: "04", title: "Final Walkthrough", desc: "Inspect every detail together and receive comprehensive care documentation." }
    ],
    testimonial: {
      quote: "The travertine patio transformed our backyard into something rivaling any resort. Two years in, still flawless.",
      attribution: "Andrew & Lisa C., Simpsonville"
    },
    faqs: [
      { question: "How long does paver patio installation take?", answer: "One to three weeks for most residential projects. Multi-level or expansive designs may need more time. Detailed schedule at consultation." },
      { question: "Travertine vs concrete pavers?", answer: "Travertine offers classic European warmth and organic texture. Concrete provides uniformity, color range, and easier maintenance. Both perform well in Upstate SC over a proper compacted aggregate base. We guide you through options." },
      { question: "How do patios hold up in Greenville's climate?", answer: "Properly engineered base is the key — adequate compaction, appropriate aggregate, correct drainage slope. We engineer for local soil and climate so your patio stays stable and beautiful for years." },
      { question: "What is polymeric sand?", answer: "Specialty jointing material creating a firm, flexible bond between pavers. Resists rain washout, inhibits weeds, discourages insects. Standard on every installation." },
      { question: "What maintenance is required?", answer: "Minimal — periodic rinsing, occasional sweeping, professional sealer every few years for natural stone. Among the lowest-maintenance outdoor surfaces available." },
      { question: "What does a luxury paver patio cost?", answer: "Varies by size, design complexity, and materials. Detailed proposals after consultation so you understand every dollar of the investment." }
    ],
    ctaHeading: "Ready for an Outdoor Space That Commands Attention?",
    ctaText: "Every patio we build is custom-designed for the property and lifestyle it serves. Schedule a consultation to explore what's possible.",
    urgencyText: "We are selective about projects — call today for your private design consultation.",
    relatedSlugs: ["pool-decks-pool-coping", "outdoor-kitchens", "outdoor-gas-fire-pits"]
  },
  {
    slug: "pool-decks-pool-coping",
    name: "Pool Decks & Coping",
    tagline: "Crafted for the exceptional home",
    image: poolDecks,
    heroImage: "https://pccmxdlkaklgctldxznm.supabase.co/storage/v1/object/public/site-assets/heroes/pool-decks.png",
    seoTitle: "Pool Deck Installation Greenville SC | Elevation Landscapes",
    h1: "Pool Deck Installation in Greenville, SC — Crafted for the Exceptional Home",
    subheadline: "Luxury pool decks and pool coping transforming the space around your pool into an environment as refined as the home it surrounds.",
    bodyParagraphs: [
      "A pool is the centerpiece of outdoor living. The materials surrounding it — how they feel underfoot in July, how they age over a decade — define whether a pool environment feels exceptional or adequate. At Elevation Landscapes, we design and install pool decks and coping meeting the standard your property demands.",
      "Travertine pool decks are our most requested installation. The naturally porous surface dissipates heat during peak summer while tonal variation gives each project a look no manufactured alternative can replicate. For a more uniform aesthetic, we source thermal pavers and cool deck pavers engineered for slip-resistant finishes without sacrificing refined appearance.",
      "Pool coping is where we distinguish ourselves most clearly. Bullnose coping transitions pool shell to deck with a finished edge that is both functional and architectural. We work with natural stone, porcelain, and pre-cast concrete in profiles complementing your pool's geometry and home's design language. Our teams understand tolerances, drainage, and structural details determining whether coping stays flawless or shifts within seasons.",
      "Every project starts with site assessment and consultation — pool shell, architectural style, landscape, lifestyle. A family entertaining frequently needs different design than a client wanting a tranquil resort retreat. We build toward your specific vision.",
      "Upstate SC's climate means temperature fluctuation, occasional frost, and prolonged summer heat stressing materials and joints. We select grout systems, polymeric sands, and sealers rated for regional conditions, detailing expansion joints protecting the investment long-term.",
      "We serve homeowners across Greenville, Travelers Rest, Simpsonville, and Spartanburg. Our portfolio includes estates, new builds, and full outdoor living renovations. We take on the right projects and execute each to a standard we are proud to stand behind."
    ],
    trustSignals: [
      { title: "Exclusively Luxury Residential", description: "High-end projects only across Greenville and Upstate SC" },
      { title: "Premium Materials", description: "Travertine, natural stone, porcelain, engineered pavers meeting strict standards" },
      { title: "Regional Expertise", description: "Upstate SC climate, soil, and code knowledge" },
      { title: "Single Point of Contact", description: "Full project management from consultation through sealing" },
      { title: "Proven Portfolio", description: "Completed projects across Greenville, Travelers Rest, Simpsonville, Spartanburg" },
      { title: "Safety-First Design", description: "Slip-resistant materials and heat-dissipating surfaces engineered for pool environments" }
    ],
    processSteps: [
      { num: "01", title: "Design Consultation", desc: "Pool shell, architecture, landscape, and lifestyle evaluated to shape your vision." },
      { num: "02", title: "Material Selection", desc: "Travertine, thermal pavers, and coping profiles matched to your pool and home." },
      { num: "03", title: "Precision Installation", desc: "Setting materials, expansion joints, and slip-resistant finishes with expert craftsmanship." },
      { num: "04", title: "Final Sealing & Walkthrough", desc: "Surface protection applied and every detail confirmed together." }
    ],
    testimonial: {
      quote: "Travertine deck and coping are stunning. Stays cool, looks incredible, craftsmanship evident in every edge.",
      attribution: "Nicole & Brian W., Travelers Rest"
    },
    faqs: [
      { question: "What materials for luxury pool decks in Greenville?", answer: "Travertine most popular for heat dissipation and beauty. Also porcelain pavers, thermal bluestone, and cool deck pavers. We walk through samples and performance during consultation." },
      { question: "What is bullnose coping?", answer: "Rounded-edge profile overhanging the pool shell, directing splash water away while creating a finished architectural transition. We select profiles matching your pool geometry and design intent." },
      { question: "How does Greenville's climate affect installation?", answer: "Temperature variation and frost stress hardscape. We specify freeze-thaw rated materials, appropriate setting systems, and expansion joints for natural movement without cracking." },
      { question: "Travertine maintenance?", answer: "Resealing every two to three years, routine pH-neutral cleaning. We provide a tailored guide specific to your materials." },
      { question: "Timeline and planning?", answer: "Two to four weeks construction. Engage in late winter or early spring to secure scheduling and materials ahead of peak season demand." },
      { question: "How do you ensure slip resistance?", answer: "Textured travertine, brushed stone, and rated cool deck pavers providing traction when wet. We never install polished surfaces in pool applications. Slip resistance and refined aesthetics coexist." }
    ],
    ctaHeading: "Ready to Transform Your Pool Environment?",
    ctaText: "Every pool deck we build is designed for the specific property and lifestyle it serves. Schedule a consultation to explore what's possible.",
    urgencyText: "Calendar fills quickly during planning season — contact us today.",
    relatedSlugs: ["paver-patios", "outdoor-kitchens", "landscape-lighting"]
  },
  {
    slug: "outdoor-kitchens",
    name: "Outdoor Kitchens",
    tagline: "Custom design and master craftsmanship",
    image: outdoorKitchens,
    heroImage: "https://pccmxdlkaklgctldxznm.supabase.co/storage/v1/object/public/site-assets/heroes/outdoor-kitchens.png",
    seoTitle: "Outdoor Kitchens Greenville SC | Elevation Landscapes",
    h1: "Outdoor Kitchens Greenville SC — Custom Design and Master Craftsmanship",
    subheadline: "From hand-selected natural stone to commercial-grade stainless steel appliances, outdoor kitchens that redefine what outdoor living means for your home.",
    bodyParagraphs: [
      "There is a particular evening unique to Upstate South Carolina — warm air, Blue Ridge foothills fading to violet, and people you care about gathered in an extraordinary space. At Elevation Landscapes, we design and build outdoor kitchens in Greenville worthy of those evenings.",
      "Every project is conceived from scratch — tailored to your architecture, property flow, and how your family lives. No off-the-shelf solutions, no compromises. Our custom outdoor kitchen designs begin with one conviction: your outdoor space should match the refinement of the home it surrounds.",
      "Materials are selected with discernment. Natural stone veneer, hand-selected for color and character, gives structures permanence manufactured alternatives cannot replicate. Outdoor cabinetry is engineered for South Carolina's climate — humidity, temperature shifts, years of use. Every built-in grill island is anchored in a structural framework for longevity, not just aesthetics.",
      "We partner with manufacturers of commercial-grade stainless steel appliances — professional grills, refrigeration, side burners, smokers, pizza ovens, beverage centers. Each chosen for performance and design. All gas, electrical, and utility integration handled by licensed professionals to code.",
      "Greenville and Upstate SC have seen remarkable growth in outdoor living. We understand North Main, Augusta Road, Travelers Rest, and the lake communities along Keowee and Hartwell. A well-designed outdoor kitchen transforms property value, curb appeal, and daily quality of life.",
      "Our process is collaborative. We walk your property, study sight lines, evaluate breezes and sun, and present a design feeling inevitable. The results are spaces homeowners describe not as additions but transformations."
    ],
    trustSignals: [
      { title: "Two Decades Combined Experience", description: "Luxury hardscape across Greenville and Upstate SC" },
      { title: "Exclusive Portfolio", description: "Projects across Greenville, Travelers Rest, and lake communities" },
      { title: "Premium Partnerships", description: "Top suppliers of stone veneer, masonry, and commercial appliances" },
      { title: "Senior Design + Certified Artisans", description: "Dedicated specialist and craftsmen on every project" },
      { title: "Full Structural Warranty", description: "Masonry coverage plus licensed utility integration" },
      { title: "Licensed Utilities", description: "All gas, electrical, and plumbing by licensed Upstate SC professionals" }
    ],
    processSteps: [
      { num: "01", title: "Property Consultation", desc: "Space, entertaining style, and architectural influences evaluated to shape your vision." },
      { num: "02", title: "Collaborative Design", desc: "Material samples, appliance specs, and renderings refined together before a stone is laid." },
      { num: "03", title: "Master Build", desc: "Stone, cabinetry, appliances, and licensed utility work executed with meticulous craftsmanship." },
      { num: "04", title: "Final Walkthrough", desc: "Demonstrate all systems, deliver care instructions and warranty documentation." }
    ],
    testimonial: {
      quote: "Our outdoor kitchen is where we spend every weekend. Stone work, appliance layout, the flow from the pool deck — Elevation thought of everything.",
      attribution: "Greg & Michelle F., Lake Keowee"
    },
    faqs: [
      { question: "What does a custom outdoor kitchen cost in Greenville?", answer: "$40,000 to well over $150,000 depending on size, complexity, appliances, and finishes. Fully itemized proposals after consultation — every line transparent." },
      { question: "How long does the build take?", answer: "Six to fourteen weeks from groundbreaking to walkthrough. Detailed timeline at design phase with proactive communication throughout." },
      { question: "Year-round use in Upstate SC?", answer: "Yes — mild winters and long warm seasons are ideal. We design with climate in mind, specifying materials, covers, and orientations for all-season comfort." },
      { question: "Warranty?", answer: "Structural warranty on masonry plus manufacturer appliance warranties. We remain available long after completion for questions and future enhancements." },
      { question: "Can you integrate with existing patio, pool, or pergola?", answer: "Absolutely. We connect kitchens seamlessly to patios, pergolas, fire pits, pool decks, and outdoor living rooms. Unified design always produces the best result." },
      { question: "What does the design process look like?", answer: "Property consultation, then collaborative concept with material samples, appliance specs, and renderings refined together before a stone is laid." }
    ],
    ctaHeading: "Ready for an Outdoor Kitchen That Transforms How You Live?",
    ctaText: "Every outdoor kitchen we build is custom-designed for the property and family it serves. Schedule a consultation to explore what's possible.",
    urgencyText: "Building seasons fill quickly — call today to speak with a senior design specialist.",
    relatedSlugs: ["outdoor-gas-fire-pits", "paver-patios", "pool-decks-pool-coping"]
  },
  {
    slug: "outdoor-gas-fire-pits",
    name: "Gas Fire Pits",
    tagline: "Designed for the way you live",
    image: firePits,
    heroImage: "https://pccmxdlkaklgctldxznm.supabase.co/storage/v1/object/public/site-assets/heroes/fire-pits.png",
    seoTitle: "Outdoor Gas Fire Pits Greenville SC | Elevation Landscapes",
    h1: "Custom Outdoor Gas Fire Pits in Greenville, SC — Designed for the Way You Live",
    subheadline: "Bespoke gas fire features where master craftsmanship, enduring materials, and site-specific design define your outdoor living experience.",
    bodyParagraphs: [
      "There is a moment, as dusk settles over the Blue Ridge foothills, when a well-designed outdoor space transforms from beautiful to unforgettable. At Elevation Landscapes, we engineer that moment — and a custom outdoor gas fire pit is often at its center.",
      "Greenville homeowners who expect excellence understand fire features are an architectural statement, not an accessory. A built-in fire pit extends your outdoor living season into cool Upstate South Carolina evenings, creates a natural gathering point, and elevates your entire exterior environment.",
      "What separates an exceptional gas fire pit from a manufactured product is the integrity behind it. Every built-in fire pit we install begins with site-specific consultation — your architecture, masonry palette, gas infrastructure, and how your family uses the space. Nothing templated. Everything considered.",
      "Our installations incorporate premium natural gas burners for consistent, clean flames responding immediately in any season. We work with natural bluestone, travertine, granite, and custom-blended mortars — sourced for refinement and durability in South Carolina's climate. For contemporary spaces, fire glass media in a range of hues produces a luminous, jewel-like effect striking in evening hours.",
      "All gas line work is coordinated with licensed professionals, and every stone fire pit installation meets or exceeds South Carolina code — no questions about safety, performance, or permitting.",
      "We do not install prefabricated or kit-based products. Every fire feature is custom and site-specific — ensuring design coherence with your architecture and a finished product that reads as a permanent, intentional part of the landscape rather than an afterthought."
    ],
    trustSignals: [
      { title: "Decade of Luxury Experience", description: "Exclusive high-end residential across Greenville and Upstate SC" },
      { title: "Code-Compliant Gas Work", description: "Licensed professionals, fully SC compliant" },
      { title: "Curated Portfolio", description: "Custom stone fire pits, integrated kitchen features, courtyard installations" },
      { title: "Premium Materials Only", description: "Bluestone, travertine, granite, weather-resistant systems" },
      { title: "Limited-Acceptance Model", description: "Senior-level craftsmanship and focused attention on every project" },
      { title: "Weather-Resistant Build", description: "Full construction warranty with professional sealers for year-round durability" }
    ],
    processSteps: [
      { num: "01", title: "Site Consultation", desc: "Architecture, masonry palette, gas infrastructure, and lifestyle evaluated to inform every design decision." },
      { num: "02", title: "Custom Design", desc: "Materials, burner spec, fire glass or stone media selection — all matched to your architecture and preferences." },
      { num: "03", title: "Expert Build", desc: "Masonry construction with licensed gas integration, executed with precision and full code compliance." },
      { num: "04", title: "Final Ignition", desc: "Walk every detail, demonstrate operation, and deliver your comprehensive care guide." }
    ],
    testimonial: {
      quote: "The fire pit is where every evening ends now. Stone work matches our patio perfectly and the flame is stunning.",
      attribution: "David & Laura T., Alta Vista"
    },
    faqs: [
      { question: "Why choose a gas fire pit over wood-burning?", answer: "No wood, smoke, or ash. Natural gas ignites at a valve turn or remote touch with consistent, clean flame. For frequent entertainers, gas offers unmatched convenience." },
      { question: "How does a built-in fire pit hold up to Greenville's climate?", answer: "We use weather-resistant materials and sealers engineered for Upstate SC's humidity, temperature swings, and freezing. Properly built, it performs beautifully for decades." },
      { question: "How long does design and installation take?", answer: "Six to twelve weeks from consultation to completion depending on complexity and material lead times. We recommend reaching out well ahead of your target season." },
      { question: "What is fire glass media?", answer: "Decorative tempered glass above the burner refracting light for a vivid dimensional flame effect. Does not degrade with heat, easy to clean, and can be refreshed as preferences change." },
      { question: "Will a custom fire pit add value to my home?", answer: "Custom fire features consistently distinguish properties in Greenville's luxury market, contributing to perceived value and speed of sale." },
      { question: "Can I buy a prefab fire pit and have you install it?", answer: "No — every feature we build is custom and site-specific, ensuring design coherence and a result that reads as permanent architecture, not an add-on." }
    ],
    ctaHeading: "Ready for a Fire Feature That Defines Your Evenings?",
    ctaText: "Every fire feature we build is custom-designed for the property it serves. Schedule a private consultation to explore what's possible for your outdoor living space.",
    urgencyText: "Spring and fall demand is highest — reach out today to secure your spot.",
    relatedSlugs: ["outdoor-kitchens", "paver-patios", "landscape-lighting"]
  },
  {
    slug: "new-plant-installation",
    name: "New Plant Installation",
    tagline: "Crafted for the exceptional residential property",
    image: plantInstallation,
    heroImage: "https://pccmxdlkaklgctldxznm.supabase.co/storage/v1/object/public/site-assets/heroes/plant-installation.png",
    seoTitle: "New Plant Installation Greenville SC | Elevation Landscapes",
    h1: "New Plant Installation in Greenville, SC — Crafted for the Exceptional Residential Property",
    subheadline: "Horticultural precision and refined aesthetic vision transforming Greenville properties into landscapes of enduring distinction.",
    bodyParagraphs: [
      "We do not simply dig a hole and place a plant. Every installation begins with comprehensive site assessment — soil composition, drainage, sun exposure, and microclimate conditions specific to your property. This knowledge informs every decision, from species selection to root ball preparation to seasonal planting schedules ensuring year-round performance.",
      "Our luxury landscape planting centers on curating a palette that is visually extraordinary and ecologically intelligent. We source premium ornamental plant material from specialty growers — specimen trees with established canopies, rare ornamental shrubs, and refined native cultivars suited to the Piedmont climate. These are not retail plants. They are investment-grade selections chosen for form, scale, and enduring character.",
      "Specimen tree planting is among our most transformative services. A single well-chosen tree — a mature Japanese maple framing a motor court, a sculptural serviceberry anchoring a garden border — can redefine a property's character. Our crews handle precision root ball preparation and backfill protocols promoting establishment and long-term vitality.",
      "For comprehensive custom garden design, our team collaborates through every phase. We understand Upstate SC's seasonal rhythms, the late-spring heat arriving earlier than anticipated, and the importance of material resilient enough to thrive in Greenville's distinctive climate.",
      "The landscape surrounding your home is a living extension of how you live and what you value. Every plant we install is a permanent architectural decision, not a temporary aesthetic choice. The result deepens in beauty each passing season.",
      "Our clients are not looking for a contractor — they want a trusted partner bringing expertise, aesthetic sensibility, and genuine investment in long-term success. That is precisely what we deliver on every project."
    ],
    trustSignals: [
      { title: "Decade of Luxury Focus", description: "Exclusive high-end residential across Greenville and Upstate SC" },
      { title: "Specialty Sourcing", description: "Rare specimens and native cultivars from wholesale growers unavailable at retail" },
      { title: "Rigorous Installation", description: "Professional root ball preparation, soil amendment, precision placement" },
      { title: "Seasonal Planning", description: "Dedicated schedules and post-installation care programs" },
      { title: "Referral-Built Trust", description: "Reputation earned through results on discerning properties" },
      { title: "Establishment Warranty", description: "Comprehensive plant warranty with ongoing care guidance for lasting health" }
    ],
    processSteps: [
      { num: "01", title: "Site Assessment", desc: "Soil, drainage, sun exposure, and microclimate analysis to inform every planting decision." },
      { num: "02", title: "Plant Curation", desc: "Species matched to architecture, climate zone, and your vision for the property." },
      { num: "03", title: "Precision Installation", desc: "Root ball prep, soil amendment, and expert placement for optimal establishment." },
      { num: "04", title: "Establishment Care", desc: "Seasonal schedule, warranty, and ongoing guidance ensuring long-term success." }
    ],
    testimonial: {
      quote: "Elevation sourced specimen Japanese maples we couldn't find anywhere. Two years later they're thriving and the garden looks better every season.",
      attribution: "Elizabeth & Richard G., North Main"
    },
    faqs: [
      { question: "What does the installation process look like?", answer: "Site evaluation of soil, drainage, sun, and landscape character. Then curated selection with root ball preparation, soil amendment, and seasonal planting schedule for long-term success." },
      { question: "Where do you source plant material?", answer: "Specialty wholesale growers cultivating premium ornamentals, rare specimen trees, and refined native cultivars unavailable at retail. Every plant meets our standards for size, form, and quality." },
      { question: "How does Greenville expertise benefit my project?", answer: "Piedmont clay, humidity, late frosts, and early summer heat are variables we design around. Material is selected specifically for these conditions so your landscape thrives year after year." },
      { question: "Can you install large mature specimen trees?", answer: "Absolutely — one of our most requested services. A single properly placed mature tree can dramatically elevate a luxury property's presence and value." },
      { question: "When is the best time for planting in Greenville?", answer: "Early spring or fall for moderate temperatures and root establishment before summer heat. We design schedules for successful installation across multiple seasonal windows." },
      { question: "Warranty and post-installation support?", answer: "Warranty coverage and care guidance on every project. We view each installation as the beginning of a relationship, not end of a transaction." }
    ],
    ctaHeading: "Ready for a Landscape That Reflects Everything Your Home Represents?",
    ctaText: "Every planting we design is curated for the specific property it serves. Schedule a consultation to explore what's possible.",
    urgencyText: "Limited new clients each season — call today for your consultation.",
    relatedSlugs: ["landscape-remediation", "sod-and-seeding", "irrigation-installation-repair"]
  },
  {
    slug: "sod-and-seeding",
    name: "Sod & Seeding",
    tagline: "Precision turf craftsmanship for the discerning homeowner",
    image: sodSeeding,
    heroImage: "https://pccmxdlkaklgctldxznm.supabase.co/storage/v1/object/public/site-assets/heroes/sod-seeding.png",
    seoTitle: "Sod Installation Greenville SC | Elevation Landscapes",
    seoDescription: "Premium sod and seeding for Greenville & Upstate SC luxury properties. Bermuda, Zoysia, hydroseeding, expert soil preparation. Schedule a consultation.",
    h1: "Sod Installation in Greenville, SC — Precision Turf Craftsmanship for the Discerning Homeowner",
    subheadline: "Uncompromising standards delivering lush, expertly established turf that transforms the entire character of your property.",
    bodyParagraphs: [
      "A truly exceptional lawn does not happen by chance. It results from deliberate decisions about soil chemistry, turf variety, grade, drainage, and timing. We approach sod installation and professional seeding with the same precision that goes into every element of a luxury property.",
      "Upstate South Carolina's climate presents distinct opportunities and demands. Long humid summers and mild winters create ideal conditions for warm-season grasses, but only when paired with the right soil profile and planted at the right moment. We begin every project with comprehensive soil analysis — compaction, pH, organic matter, and drainage — before a single roll arrives.",
      "We select the turf variety best suited to your conditions, aesthetics, and maintenance expectations. Bermuda offers dense, resilient surface with outstanding drought tolerance for expansive open lawns. Zoysia delivers lush, carpet-like texture with deep green color holding exceptionally in Greenville's transition zone. Both are among the most sought-after varieties across Upstate SC.",
      "For larger properties, slopes, or areas where conventional sod is less practical, our hydroseeding programs provide beautifully uniform results — a slurry of seed, mulch, and fertilizer promoting fast germination across irregular or expansive terrain.",
      "Installation is only as good as preparation. Our crews perform thorough grading and soil amendment prior to laying sod — proper drainage slope, even surface finish. Seams offset, edges cleanly cut, every roll firmed and irrigated with precision. This attention is not industry standard. It is our standard.",
      "The outcome is a lawn serving as foundation for the entire landscape — enhancing architectural presence, framing hardscape, and creating an inviting environment reflecting your investment. Greenville homeowners choosing us are investing in lasting transformation by a team holding every detail to the highest standard."
    ],
    trustSignals: [
      { title: "Exclusively Luxury Residential", description: "High-end landscapes across Greenville and Upstate SC" },
      { title: "Soil Science First", description: "Comprehensive analysis and amendment on every project" },
      { title: "Premium Turf Sources", description: "Bermuda and Zoysia from vetted high-grade farms" },
      { title: "Full-Service Installation", description: "Soil prep through final edging and irrigation" },
      { title: "Proven Results", description: "Craftsmanship and quality that hold season after season" },
      { title: "Irrigation Coordination", description: "Seamless integration with irrigation systems for optimal turf establishment" }
    ],
    processSteps: [
      { num: "01", title: "Soil Analysis", desc: "Compaction, pH, organic matter, drainage — comprehensive evaluation before any work begins." },
      { num: "02", title: "Variety Selection", desc: "Bermuda, Zoysia, or seeding matched to your property's conditions, aesthetics, and maintenance expectations." },
      { num: "03", title: "Site Preparation", desc: "Grading, amendment, compaction correction — building the invisible foundation for lasting results." },
      { num: "04", title: "Precision Installation", desc: "Offset seams, clean edges, immediate irrigation — every detail executed to the highest standard." }
    ],
    testimonial: {
      quote: "Elevation prepped our soil meticulously before laying Zoysia across the property. Six months later it looks like it has been there for years.",
      attribution: "Kevin & Amy R., Greer"
    },
    faqs: [
      { question: "What sod is best for Greenville properties?", answer: "Zoysia for dense refined texture and transition zone performance. Bermuda for sun-drenched lawns needing durability and rapid establishment. We recommend based on your specific site evaluation." },
      { question: "What does soil preparation involve?", answer: "Detailed analysis then amendment, grading, and compaction correction. Proper prep ensures root establishment, accurate drainage, and uniform appearance holding over time." },
      { question: "When is hydroseeding better than sod?", answer: "For larger properties, slopes, or irregular areas. Fast even germination across expansive terrain at a fraction of full sod cost." },
      { question: "Maintenance after installation?", answer: "Consistent watering for two to three weeks, then warm-season grasses are low-maintenance and well-adapted to Upstate SC. We provide a care schedule for your variety and season." },
      { question: "Best time of year?", answer: "Late spring through early summer for sod. Late summer into early fall for seeding. We plan around the calendar and your property's microclimate." },
      { question: "Where do you source sod?", answer: "Exclusively from premium turf farms meeting our standards for variety consistency, density, and root depth. Long-term performance depends on material quality and we never cut corners." }
    ],
    ctaHeading: "Ready to Elevate Your Lawn to the Standard Your Home Deserves?",
    ctaText: "Your lawn is the foundation of your entire landscape. Schedule a private consultation to discuss soil preparation, turf variety, and the timeline for transforming your property.",
    urgencyText: "Exceptional lawns begin with a single conversation — call today.",
    relatedSlugs: ["grading-solutions", "irrigation-installation-repair", "new-plant-installation"]
  },
  {
    slug: "landscape-lighting",
    name: "Landscape Lighting",
    tagline: "Architectural illumination for exceptional homes",
    image: landscapeLighting,
    heroImage: "https://pccmxdlkaklgctldxznm.supabase.co/storage/v1/object/public/site-assets/heroes/landscape-lighting.png",
    seoTitle: "Landscape Lighting Greenville SC | Elevation Landscapes",
    h1: "Landscape Lighting Greenville SC — Architectural Illumination Designed for Exceptional Homes",
    subheadline: "Your property represents years of vision and investment. After dark, it should be no different. Luxury outdoor lighting revealing the full character of your home and grounds, night after night.",
    bodyParagraphs: [
      "Just after dusk, a property either retreats into darkness or reveals itself in entirely new light. For Greenville and Upstate South Carolina homeowners who have invested in exceptional architecture and curated landscaping, that moment deserves to be extraordinary. Our architectural lighting design process ensures it is.",
      "We approach landscape lighting as foundational, not afterthought. Every project begins with site evaluation — architectural character, plantings, hardscape, and the sightlines defining your property. From there we develop a layered lighting plan as deliberate as the landscape itself.",
      "Installations are built around professional-grade LED fixtures in solid brass and cast aluminum — architectural-grade luminaires unavailable at the consumer level. They resist corrosion and hold integrity through Upstate SC's full seasonal range. These are investments in permanence, not products from a home improvement store.",
      "The backbone is a properly engineered transformer and low-voltage infrastructure, sized and zoned for today with room for expansion. Our low-voltage expertise delivers peak efficiency without energy waste or the maintenance burden of undersized systems.",
      "Technique matters as much as equipment. We employ moonlighting — fixtures high in mature canopies casting soft dappled light mirroring natural moonlight. Combined with uplighting on specimen trees and architecture, plus subtle pathway lighting guiding movement without harsh interruption, the result commands attention across Greenville's finest neighborhoods.",
      "Upstate SC's humidity, thunderstorms, and temperature swings require exacting weatherproofing at every component. The difference between a system lasting fifteen years and one failing in eighteen months lives entirely in installation quality — and our teams are trained to that detail."
    ],
    trustSignals: [
      { title: "Decade of Luxury Focus", description: "Exclusive residential projects throughout Greenville and Upstate SC" },
      { title: "Trade-Only Fixtures", description: "Architectural-grade LED and transformers unavailable at retail" },
      { title: "Prestigious Portfolio", description: "Installations across Greenville's most distinguished neighborhoods and lake communities" },
      { title: "Comprehensive Warranty", description: "Materials, workmanship, and structured maintenance programs" },
      { title: "Climate-Engineered", description: "Deep Upstate SC familiarity for lasting durability" },
      { title: "Future-Ready Design", description: "Transformer and wiring infrastructure sized for expansion as your landscape evolves" }
    ],
    processSteps: [
      { num: "01", title: "Evening Site Evaluation", desc: "Architecture, plantings, hardscape, and sightlines assessed to understand your property's full potential after dark." },
      { num: "02", title: "Layered Lighting Plan", desc: "Uplighting, moonlighting, pathway, and accent techniques composed into a cohesive design." },
      { num: "03", title: "Precision Installation", desc: "Weatherproofed connections, direct-burial cable, and proper transformer sizing for lasting performance." },
      { num: "04", title: "Nighttime Reveal", desc: "Walk the property after dark together, fine-tuning every angle until every detail is perfect." }
    ],
    testimonial: {
      quote: "Our property looks like a different place after dark. The moonlighting through our oaks is breathtaking. Elevation's detail is unmatched.",
      attribution: "Stephen & Claire D., Lake Keowee"
    },
    faqs: [
      { question: "What does your lighting design process look like?", answer: "On-site consultation assessing architecture, landscape, and evening use. A layered plan with uplighting, moonlighting, and pathway techniques, fixture selections, and detailed proposal. Nothing installed until you approve every element." },
      { question: "What LED fixtures do you use?", answer: "Solid brass, cast aluminum, and marine-grade from trade-only manufacturers. Superior color rendering, longer lifespans, and construction built for Upstate SC's humid climate. The gap from consumer-grade is visible within a few years." },
      { question: "How does low-voltage lighting work?", answer: "12-volt system via a transformer — more energy-efficient and safer than line voltage. We engineer capacity and wiring zones for your property with room for future expansion." },
      { question: "How does Upstate SC's climate affect installation?", answer: "Humidity, heavy rain, and temperature swings demand wet-location fixtures, direct-burial cable, and weatherproofing at every connection. This detail separates systems lasting decades from those needing constant repair." },
      { question: "What is moonlighting?", answer: "Fixtures high in tree canopies aimed downward, recreating soft diffused light through branches. Adds depth and organic quality uplighting alone cannot. On properties with mature trees — common in Greenville — it is our most transformative technique." },
      { question: "Warranty and maintenance?", answer: "Warranty on materials and workmanship plus scheduled maintenance for seasonal adjustments as plantings grow. Prompt service calls between visits as needed." }
    ],
    ctaHeading: "Ready to Experience Your Property the Way It Was Meant to Be Seen?",
    ctaText: "Every lighting system we design is composed for the specific property it serves. Schedule a private consultation to discover what's possible after dark.",
    urgencyText: "Select number of clients each season — call today for your consultation.",
    relatedSlugs: ["custom-water-features", "outdoor-kitchens", "paver-patios"]
  }
] as ServiceData[]).sort((a, b) => a.name.localeCompare(b.name));

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): ServiceData[] {
  return slugs.map(slug => services.find(s => s.slug === slug)).filter(Boolean) as ServiceData[];
}
