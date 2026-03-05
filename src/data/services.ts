import gradingSolutions from "@/assets/services/grading-solutions.jpg";
import undergroundDrainage from "@/assets/services/underground-drainage.jpg";
import irrigation from "@/assets/services/irrigation.jpg";
import landscapeRemediation from "@/assets/services/landscape-remediation.jpg";
import waterFeatures from "@/assets/services/water-features.jpg";
import stoneStaircases from "@/assets/services/stone-staircases.jpg";
import stonePathways from "@/assets/services/stone-pathways.jpg";
import boulderWalls from "@/assets/services/boulder-walls.jpg";
import blockWalls from "@/assets/services/block-walls.jpg";
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
}

export const services: ServiceData[] = ([
  {
    slug: "grading-solutions",
    name: "Grading Solutions",
    tagline: "Precision site engineering for exceptional estates",
    image: gradingSolutions,
    seoTitle: "Luxury Grading Services Greenville SC | Elevation Landscapes",
    h1: "Luxury Grading Services in Greenville, SC — Precision Site Engineering for the Discerning Estate",
    subheadline: "The landscape you envision begins beneath the surface. Elevation Landscapes delivers professional grading solutions engineered to perform with the same exactitude your property reflects above ground.",
    bodyParagraphs: [
      "The foundation of every extraordinary landscape lives beneath the surface. Professional landscape grading in Greenville is not merely earthwork — it is the invisible architecture upon which every visible element rests. Our grading services exist at the intersection of engineering precision and aesthetic vision, ensuring that every contour of your property serves both form and function.",
      "Greenville's piedmont soils and clay-heavy terrain require specialized expertise that generic contractors simply cannot provide. The red clay that defines Upstate SC is both an asset and a challenge — beautiful in color, demanding in behavior. Professional grading begins with thorough site assessment: drainage patterns, soil composition, slope ratios, and the relationship between your home's foundation and the surrounding grade.",
      "Our estate site preparation work encompasses soil stabilization, drainage engineering, and meticulous land leveling for pools, motor courts, outdoor living structures, and expansive lawn panels. Every project is approached with the understanding that this is a residential grading contractor serving Upstate SC's most distinguished properties.",
      "We coordinate seamlessly with architects, civil engineers, and design teams — ensuring that grading integrates with the broader vision rather than existing as an isolated trade. This collaborative approach produces results that standalone contractors simply cannot achieve.",
      "The value of proper grading shows in the years to come — retaining walls stay plumb, lawns drain without pooling, foundations remain protected, and the entire landscape performs as intended. Drainage engineering and soil stabilization are not expenses; they are investments in the longevity of everything built above them."
    ],
    trustSignals: [
      { title: "Exclusive Luxury Focus", description: "Exclusively luxury residential — no commercial work" },
      { title: "Piedmont Soil Expertise", description: "Decades of combined grading expertise specific to Greenville's piedmont soils" },
      { title: "Principal-Led Projects", description: "Every project supervised by a senior team member accountable to the homeowner" },
      { title: "Seamless Collaboration", description: "Seamless collaboration with Greenville's architects and engineers" },
      { title: "Distinguished Portfolio", description: "Portfolio of luxury estates across Greenville's distinguished neighborhoods" }
    ],
    faqs: [
      { question: "How long does grading take?", answer: "2-4 days for single-zone work, and several weeks for comprehensive estate preparation involving multiple areas, drainage integration, and coordination with other trades." },
      { question: "Why does Greenville require specialized grading expertise?", answer: "Red clay soils are susceptible to erosion and compaction. Improper grading in these conditions causes drainage failures, foundation settling, and long-term structural issues that are far more costly to correct than to prevent." },
      { question: "What warranty do you offer on grading work?", answer: "We provide compaction verification, erosion control measures, and a comprehensive project warranty covering grade integrity and drainage performance." },
      { question: "Can you coordinate with my architect or engineer?", answer: "Yes — we regularly collaborate with design professionals and integrate grading with broader project plans, ensuring seamless execution across all disciplines." },
      { question: "How does grading protect my foundation?", answer: "Correct slope ratios direct water away from structures, eliminating hydrostatic pressure, foundation stress, and erosion that compromise your home's structural integrity." },
      { question: "Is grading only for new construction?", answer: "No — we perform corrective grading on established estates addressing shifted drainage patterns, preparation for new pools, additions, and outdoor living spaces." }
    ],
    ctaText: "Contact us today to schedule a private site consultation — and take the first step toward a landscape built on a foundation as refined as the vision above it.",
    relatedSlugs: ["underground-drainage-solutions", "sod-and-seeding", "boulder-retaining-walls"]
  },
  {
    slug: "underground-drainage-solutions",
    name: "Underground Drainage",
    tagline: "Engineering that protects what you've built",
    image: undergroundDrainage,
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
      { title: "Referral-Built Reputation", description: "Reputation built entirely on referrals from satisfied clients" }
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
    seoTitle: "Irrigation Installation Greenville SC | Elevation Landscapes",
    h1: "Irrigation Installation in Greenville SC Engineered for the Landscape You Have Built",
    subheadline: "Precision irrigation systems for discerning homeowners — because an extraordinary landscape demands water management that performs to the same exacting standard.",
    bodyParagraphs: [
      "A landscape is only as enduring as the system sustaining it. Smart irrigation systems in Greenville must account for the region's unique combination of humid summers, periodic drought stress, and heavy clay soils that resist even moisture distribution.",
      "We begin with thorough site assessment — topography, soil composition, plant material requirements, sun exposure patterns, and seasonal water needs. We design custom zone management systems specifically for Greenville's rolling terrain and microclimates, ensuring every area receives precisely the water it needs.",
      "For curated gardens and specimen plantings, we integrate custom drip irrigation delivering moisture directly to root zones with zero waste. These concealed low-flow emitters protect investment-grade plantings while conserving water — a critical consideration for luxury landscape irrigation in Upstate SC.",
      "Our smart water controllers connect to local weather data, adjusting automatically for rainfall, evapotranspiration, and seasonal changes. The result is a system that thinks — responding to conditions rather than running on fixed schedules regardless of what's happening outside.",
      "For underperforming existing systems, our sprinkler repair services in Greenville SC restore efficiency through targeted diagnostics and recalibration — often without requiring full system replacement. We identify coverage gaps, pressure issues, and component failures with precision."
    ],
    trustSignals: [
      { title: "Exclusive Residential Focus", description: "Over a decade of exclusive luxury residential focus" },
      { title: "Certified Professionals", description: "Certified irrigation professionals designing for Upstate SC climate" },
      { title: "Premium Equipment", description: "Professional-grade equipment from industry-leading manufacturers" },
      { title: "Meticulous Installation", description: "Restoring lawns to pristine condition after every installation" },
      { title: "Ongoing Support", description: "Workmanship warranties and seasonal maintenance programs" }
    ],
    faqs: [
      { question: "How do you approach irrigation design?", answer: "Comprehensive on-site assessment of layout, plant material, soil composition, and sun patterns — then a custom zone plan engineered for your specific property." },
      { question: "Why is smart irrigation important in Greenville?", answer: "Greenville's humid summers, drought stress periods, and heavy seasonal rainfall demand adaptive systems that respond to actual conditions." },
      { question: "Smart vs conventional irrigation?", answer: "Smart systems use real-time weather data to auto-adjust watering schedules; conventional systems run fixed programs regardless of conditions, leading to waste and stress." },
      { question: "Is drip irrigation good for mature plantings?", answer: "Ideal — delivers water directly to root zones through concealed low-flow emitters, protecting investment-grade specimens while conserving water." },
      { question: "Do I need a full system replacement?", answer: "Often not — targeted repair and recalibration can restore performance and coverage to existing systems without the cost of full replacement." },
      { question: "What warranty is offered?", answer: "Comprehensive workmanship warranty plus ongoing seasonal maintenance programs to ensure peak performance year-round." }
    ],
    ctaText: "Contact us today to schedule a consultation — extraordinary properties require extraordinary stewardship.",
    relatedSlugs: ["sod-and-seeding", "new-plant-installation", "landscape-remediation"]
  },
  {
    slug: "landscape-remediation",
    name: "Landscape Remediation",
    tagline: "Restoring the standard your property deserves",
    image: landscapeRemediation,
    seoTitle: "Landscape Remediation Greenville SC | Elevation Landscapes",
    h1: "Landscape Remediation in Greenville, SC — Restoring the Standard Your Property Deserves",
    subheadline: "When a landscape falls short of its potential, the right firm reimagines it. Surgical precision and refined design sensibility for every restoration across Greenville and Upstate SC.",
    bodyParagraphs: [
      "Some landscapes are built once and forgotten. Others are entrusted to firms like ours. Landscape renovation in Greenville is about restoring order, intention, and beauty to spaces that time, weather, or previous contractors left behind.",
      "Greenville's long growing season accelerates overgrowth, root encroachment, and soil degradation at a pace that surprises even attentive homeowners. An existing landscape restoration in Upstate SC requires understanding what to preserve and what to remove — this is curatorial work, not demolition.",
      "We begin with comprehensive site assessment — evaluate soil health, amend where needed, and identify the elements worth preserving: mature trees with structural integrity, hedgerows providing privacy, solid hardscape that anchors the design. Everything working against the property's potential is carefully removed.",
      "Plant replacement is selected for long-term performance and seasonal cohesion — sourced from specialty growers, not retail garden centers. A luxury yard makeover isn't about trendy specimens; it's about creating a landscape that looks better in five years than it does on completion day.",
      "Soil amendment is the cornerstone of every successful remediation project — based on actual laboratory analysis of pH, compaction, nutrients, and drainage capacity. Without addressing what's beneath the surface, even the finest plants and design will underperform."
    ],
    trustSignals: [
      { title: "Proven Experience", description: "Over a decade of exclusive luxury residential experience" },
      { title: "Curated Portfolio", description: "Curated portfolio of high-end remediation projects across Greenville" },
      { title: "Expert Team", description: "Certified designers and horticulturists with deep Upstate SC knowledge" },
      { title: "Premium Sourcing", description: "Premium plants from specialty growers with establishment warranty" },
      { title: "Referral-Built", description: "Reputation built entirely on referrals from discerning homeowners" }
    ],
    faqs: [
      { question: "How long does remediation take?", answer: "Typically 1-4 weeks of active work, depending on the scope of restoration required and the size of the property." },
      { question: "Will you remove everything and start over?", answer: "No — we preserve mature trees, specimen plants, and solid hardscape elements of value. Our approach is curative and intentional, not destructive." },
      { question: "Why does local expertise matter for remediation?", answer: "Clay soils, specific pest pressures, and variable microclimates across Greenville all factor into plant selection, soil amendment, and design decisions." },
      { question: "What does soil amendment involve?", answer: "Laboratory analysis of pH, compaction, nutrient levels, and drainage capacity — then professional-grade amendments tailored to what your specific soil needs." },
      { question: "Do you offer a warranty after remediation?", answer: "Comprehensive plant establishment warranty and ongoing maintenance agreements to ensure your investment continues to perform." },
      { question: "What does remediation cost?", answer: "Every project is different — accurate estimates are only possible after a proper site assessment. We provide detailed proposals with transparent pricing." }
    ],
    ctaText: "We're accepting a limited number of remediation projects this season. Call today for your private consultation.",
    relatedSlugs: ["new-plant-installation", "sod-and-seeding", "irrigation-installation-repair"]
  },
  {
    slug: "custom-water-features",
    name: "Custom Water Features",
    tagline: "Designed for properties that demand something extraordinary",
    image: waterFeatures,
    seoTitle: "Custom Water Features Greenville SC | Elevation Landscapes",
    h1: "Custom Water Features Greenville SC — Designed for Properties That Demand Something Extraordinary",
    subheadline: "Bespoke water features — from natural stone waterfalls to custom koi ponds — bringing enduring beauty, movement, and refinement to the finest properties in Greenville and Upstate SC.",
    bodyParagraphs: [
      "The finest outdoor living spaces share a common element — the sound, movement, and visual depth of a masterfully designed water feature. Luxury waterfall design in Greenville is not about catalog products placed in a yard. It is about composing an experience with intentionality that honors both the terrain and the homeowner's vision.",
      "We source premium natural stone — quartzite, bluestone, fieldstone, and Upstate SC granite — selecting each piece for visual character, tonal harmony, and structural integrity. Our custom fountains in Upstate SC feature recirculating systems engineered for efficiency, longevity, and near-silent operation.",
      "Our process is comprehensive: site grading and preparation, structural basin construction, pump and filtration integration, water-adjacent planting design, and final hand-placement of every stone. Koi pond installation in Greenville requires proper depth, biological filtration, UV clarification, and supporting planting schemes.",
      "Sloped properties become canvases for tiered natural stone waterfalls that cascade naturally through the landscape. Level lots suit reflecting pools, formal fountains, and contemporary water walls. Every backyard water feature contractor project is custom-designed for the specific site.",
      "A custom water feature transforms a beautiful yard into a private retreat — a place where the sound of moving water replaces the noise of the world. Aquatic design at this level is both art and engineering."
    ],
    trustSignals: [
      { title: "Exclusive Focus", description: "Over a decade of exclusive luxury residential focus" },
      { title: "Premium Materials", description: "Premium natural stone and high-performance recirculating systems" },
      { title: "Integrated Design-Build", description: "Fully integrated from assessment through final stone placement" },
      { title: "Limited Project Model", description: "Limited project acceptance for undivided attention to each client" },
      { title: "Full Warranty", description: "Warranty on all structural and mechanical components" }
    ],
    faqs: [
      { question: "What is the typical timeline?", answer: "4-8 weeks for refined fountains and water walls; 10-16 weeks for koi ponds or multi-tier natural stone waterfalls, including design, material sourcing, and construction." },
      { question: "How does Upstate SC's climate affect water features?", answer: "We install freeze-resistant plumbing, proper drainage provisions, and provide seasonal maintenance guidance to ensure year-round performance and longevity." },
      { question: "What is the investment range?", answer: "Mid five figures for refined features; significantly more for large-scale installations involving koi ponds, multi-tier waterfalls, or integrated landscape compositions." },
      { question: "What maintenance is required?", answer: "Periodic filter cleaning, pump inspection, and water chemistry management for ponds. We offer comprehensive maintenance programs for all our installations." },
      { question: "Do you build koi ponds?", answer: "Yes — with proper depth engineering, biological filtration, UV clarification, and carefully designed supporting planting schemes for a balanced ecosystem." },
      { question: "Can a water feature integrate with existing hardscape?", answer: "Absolutely — we frequently integrate water features with patios, outdoor kitchens, pool surrounds, and gardens for a cohesive outdoor living experience." }
    ],
    ctaText: "Availability for new commissions is limited by design. Call today to schedule a private consultation.",
    relatedSlugs: ["natural-stone-staircases", "landscape-lighting", "paver-patios"]
  },
  {
    slug: "natural-stone-staircases",
    name: "Natural Stone Staircases",
    tagline: "Crafted for the exceptional home",
    image: stoneStaircases,
    seoTitle: "Natural Stone Staircases Greenville SC | Elevation Landscapes",
    h1: "Natural Stone Staircases in Greenville, SC Crafted for the Exceptional Home",
    subheadline: "Custom stone staircases combining the permanence of master masonry with materials sourced for beauty, character, and longevity.",
    bodyParagraphs: [
      "Few architectural elements carry the quiet authority of a natural stone staircase. Where concrete crumbles and wood weathers, stone endures — gaining character with every passing season. Custom stone steps in Greenville represent a commitment to permanence that defines the homes they serve.",
      "We work with bluestone treads offering refined charcoal tones ideal for estate entries, Appalachian fieldstone bringing the raw character of the Carolina foothills, and flagstone — Pennsylvania blue, Crab Orchard, Tennessee sandstone — each selected for the specific aesthetic and structural demands of the project.",
      "Our materials are sourced selectively from respected domestic quarries for color consistency, structural integrity, and climate performance. Every piece is evaluated in person before specification. This level of luxury outdoor staircase craftsmanship in Upstate SC is simply not available through standard supplier channels.",
      "Our masonry crews are veterans, not subcontractors — craftsmen who understand proper base depth, drainage management beneath treads, and mortaring techniques that accommodate seasonal expansion and contraction without failure.",
      "The result is a flagstone staircase installation in SC that holds its form through decades of freeze-thaw cycles, heavy rains, and daily use — a stone stair that looks better at twenty years than it did at completion."
    ],
    trustSignals: [
      { title: "15+ Years Experience", description: "Over 15 years of exclusive luxury residential hardscape in Greenville and Upstate SC" },
      { title: "Prestigious Portfolio", description: "Portfolio across Augusta Road, Paris Mountain, and greater Greenville" },
      { title: "Quarry-Direct Sourcing", description: "Materials sourced from respected domestic quarries, selected in person" },
      { title: "In-House Crews", description: "In-house masonry crews — no subcontracting of critical craftsmanship" },
      { title: "Comprehensive Warranty", description: "Comprehensive installation warranty on materials and workmanship" }
    ],
    faqs: [
      { question: "How long does installation take?", answer: "1-3 weeks of on-site construction, plus 2-4 weeks for design development and material sourcing from our quarry partners." },
      { question: "What stone do you recommend?", answer: "Bluestone for formal estates and entries, flagstone for design versatility, and fieldstone for naturalistic woodland settings. We guide selection based on your architecture." },
      { question: "What maintenance is required?", answer: "Periodic inspection, light pressure washing as needed, and professional sealing every few years to maintain appearance and weather resistance." },
      { question: "How do you handle Upstate SC's climate?", answer: "Deep compacted bases, proper sub-tread drainage, and flexible mortar formulations engineered specifically for our region's freeze-thaw cycles." },
      { question: "What does a stone staircase cost?", answer: "Varies significantly by length, elevation change, and stone selection. We provide detailed proposals with material specifications after an on-site consultation." },
      { question: "Can a staircase integrate with existing design?", answer: "Absolutely — integrated design connecting new staircases with existing pathways, walls, and gardens produces our most compelling and cohesive projects." }
    ],
    ctaText: "The conversation is complimentary. The craftsmanship is anything but ordinary. Schedule your consultation today.",
    relatedSlugs: ["custom-stone-pathways", "boulder-retaining-walls", "landscape-lighting"]
  },
  {
    slug: "custom-stone-pathways",
    name: "Custom Stone Pathways",
    tagline: "Crafted for properties that demand more",
    image: stonePathways,
    seoTitle: "Custom Stone Pathways Greenville SC | Elevation Landscapes",
    h1: "Custom Stone Pathways Greenville SC — Crafted for Properties That Demand More",
    subheadline: "Bespoke natural stone pathways for Greenville and Upstate SC's most distinguished residences — where every step reflects the character and quality of the home it serves.",
    bodyParagraphs: [
      "A beautifully crafted stone pathway communicates intention, permanence, and refined taste before a visitor reaches the front door. A luxury stone walkway in Greenville is not simply a route — it is an architectural element that defines how a property is experienced.",
      "We evaluate grade transitions, drainage requirements, natural sightlines, and pedestrian flow patterns. We study how morning light falls across stone surfaces, where curves create visual pause and invitation, and how materials connect to the home's existing architecture.",
      "Materials are hand-selected: flagstone for organic warmth and natural variation, tumbled bluestone for understated elegance, Tennessee crab orchard for warm earth tones, and locally sourced quartzite for durability and regional character. Each natural stone path installation in Upstate SC reflects the specific aesthetic of the property.",
      "Our flagstone pathway contractor teams build with compacted base layers and permeable jointing compounds or hand-packed polymeric sand — ensuring structural integrity, weed resistance, and natural drainage that protects the pathway and surrounding landscape.",
      "The result is elevated curb presence, enriched outdoor living flow, and garden path design in Greenville with architectural sophistication that no concrete or manufactured paver can replicate. Dry-laid stone and landscape connectivity define our approach."
    ],
    trustSignals: [
      { title: "15+ Years Experience", description: "Over 15 years of exclusive luxury hardscape experience" },
      { title: "Certified Techniques", description: "Certified in traditional dry-laid stone and modern permeable jointing" },
      { title: "Curated Sourcing", description: "Materials from premier natural stone quarries across the region" },
      { title: "Prestigious Portfolio", description: "Portfolio spanning North Main, Augusta Road, and Cliffs communities" },
      { title: "Craftsmanship Warranty", description: "Comprehensive craftsmanship warranty on every installation" }
    ],
    faqs: [
      { question: "What stone types do you work with?", answer: "Flagstone, Tennessee crab orchard, tumbled bluestone, and Upstate SC quartzite — each selected for the specific aesthetic and performance needs of the project." },
      { question: "How long does installation take?", answer: "3-10 business days of active installation, depending on pathway length, complexity, and site conditions." },
      { question: "How do pathways hold up in Upstate SC's climate?", answer: "Properly compacted bases, appropriate stone thickness, and permeable jointing systems handle Upstate SC's temperature swings and heavy rainfall with ease." },
      { question: "Dry-laid vs permeable jointing?", answer: "Dry-laid stone flexes naturally with ground movement; permeable jointing locks joints securely while still allowing water permeation through the pathway surface." },
      { question: "What maintenance is needed?", answer: "Periodic sweeping, occasional rinsing, and jointing reapplication every few years to maintain appearance and structural integrity." },
      { question: "Can pathways integrate with a larger design?", answer: "Many of our finest projects connect motor courts to gardens, pool terraces to guest structures, and entries to outdoor living spaces in a unified design." }
    ],
    ctaText: "Call us today to schedule your private design consultation.",
    relatedSlugs: ["natural-stone-staircases", "paver-patios", "landscape-lighting"]
  },
  {
    slug: "boulder-retaining-walls",
    name: "Boulder Retaining Walls",
    tagline: "Engineered for the land, built to last generations",
    image: boulderWalls,
    seoTitle: "Boulder Retaining Walls Greenville SC | Elevation Landscapes",
    h1: "Boulder Retaining Walls Greenville SC — Engineered for the Land, Built to Last Generations",
    subheadline: "Natural boulder retaining walls for discerning homeowners — where structural integrity and refined craftsmanship are never mutually exclusive.",
    bodyParagraphs: [
      "Greenville's rolling grades, wooded slopes, and dramatic elevation changes define the region's most prestigious properties — but unmanaged terrain erodes value and undermines investments. Natural boulder wall installation in Greenville transforms these challenges into defining landscape features.",
      "We engineer boulder walls that become the most compelling elements of a property — massive structures of carefully selected natural stone that speak to permanence, strength, and belonging. Every installation is grounded in gravity wall engineering principles adapted to site-specific conditions.",
      "Boulders are sourced for character, scale, and geological integrity — stones with weathered surfaces and natural presence suggesting they've always belonged in that exact position. Our luxury retaining wall contractor crews read stone — understanding which face belongs forward, how weight distributes across bearing surfaces, and where negative space adds compositional depth.",
      "A well-designed large stone retaining wall in SC creates usable terraced space from previously unusable hillside, establishes visual anchors for plantings, and frames outdoor living areas with natural authority. Hillside boulder wall construction in Greenville is both engineering and artistry.",
      "Natural stone placement and slope stabilization at this level require understanding soil mechanics, water management, and aesthetic composition simultaneously. The result is a wall that performs structurally while appearing as though nature placed every stone."
    ],
    trustSignals: [
      { title: "Proven Experience", description: "Over a decade of exclusive luxury residential experience" },
      { title: "Engineered Solutions", description: "Gravity wall engineering with site-specific drainage planning" },
      { title: "Premium Materials", description: "Premium natural boulders selected for geological integrity and character" },
      { title: "Dedicated Attention", description: "Deliberately limited client roster for dedicated attention to each project" },
      { title: "Lasting Support", description: "Craftsmanship guarantee with post-completion support" }
    ],
    faqs: [
      { question: "How long does installation take?", answer: "1-3 weeks for most installations; larger multi-tiered projects with integrated plantings and drainage may extend the timeline." },
      { question: "How long do boulder walls last?", answer: "Routinely lasting several decades with proper engineering — these are among the most permanent landscape structures available." },
      { question: "What challenges are specific to Upstate SC?", answer: "Clay soils, variable rainfall intensity, and freeze-thaw cycles all require specific engineering for proper drainage, stone bedding, and long-term stability." },
      { question: "What does a boulder wall cost?", answer: "Varies significantly by wall dimensions, stone selection, site conditions, and engineering complexity. Detailed proposals follow site consultation." },
      { question: "Does a boulder wall add property value?", answer: "Consistently adds measurable value to high-end properties — both in usable space creation and aesthetic distinction." },
      { question: "Can walls integrate with other features?", answer: "We regularly incorporate plantings, landscape lighting, water features, and outdoor living elements into wall designs for cohesive compositions." }
    ],
    ctaText: "Our project calendar fills well in advance. Call today to schedule a private site consultation.",
    relatedSlugs: ["block-retaining-walls", "grading-solutions", "natural-stone-staircases"]
  },
  {
    slug: "block-retaining-walls",
    name: "Block Retaining Walls",
    tagline: "Engineered precision, refined by design",
    image: blockWalls,
    seoTitle: "Block Retaining Walls Greenville SC | Elevation Landscapes",
    h1: "Block Retaining Walls Greenville SC — Engineered Precision, Refined by Design",
    subheadline: "Block retaining walls that resolve the land's challenges and redefine what your outdoor environment can become.",
    bodyParagraphs: [
      "When elevation shifts demand a structural solution with design versatility, segmental retaining walls in Greenville offer engineering precision married with aesthetic intention. Premium block systems provide consistency, durability, and design breadth that natural stone alone cannot always achieve.",
      "We assess soil bearing capacity, drainage patterns, and load requirements before a single block is set. Decorative block walls in Upstate SC must account for the region's expansive clay, heavy rainfall, and temperature extremes — factors that generic installations routinely fail to address.",
      "For walls of significant height or facing hydraulic pressure, we incorporate geogrid reinforcement creating mechanically stabilized earth systems. This retaining wall installation contractor approach ensures structural integrity far exceeding basic gravity wall construction.",
      "Terraced design transforms unusable hillside into purposeful spaces — planting beds, level lawn panels, stone-accented steps connecting levels, and flat areas for outdoor living. A landscape block wall in Greenville becomes the organizing structure around which the entire outdoor experience is designed.",
      "We source decorative block systems that endure Upstate SC's humidity, freeze-thaw cycles, and clay soil conditions. Every system is selected for both structural performance and visual refinement — because engineering and aesthetics must coexist."
    ],
    trustSignals: [
      { title: "Luxury Focus", description: "Exclusive luxury residential hardscape focus" },
      { title: "Engineered Solutions", description: "Site-specific engineering with drainage and geogrid reinforcement" },
      { title: "Premium Systems", description: "Premium segmental block systems for structural integrity and refinement" },
      { title: "Consistent Crews", description: "No subcontracting — same craftsmen from start to finish" },
      { title: "Transparent Process", description: "Detailed proposals, transparent timelines, post-installation support" }
    ],
    faqs: [
      { question: "What does a block retaining wall cost?", answer: "Several thousand for smaller walls to significantly higher for multi-tiered complex systems with integrated drainage, geogrid, and finishing elements." },
      { question: "Segmental block vs poured concrete?", answer: "Segmental offers significantly more design flexibility, better performance in clay soils, and easier integration with landscape elements than poured concrete." },
      { question: "What challenges are specific to Greenville?", answer: "Expansive clay soil, heavy seasonal rainfall, and freeze-thaw cycles require drainage aggregate, weep systems, and geogrid reinforcement for lasting performance." },
      { question: "What maintenance is required?", answer: "Minimal — periodic inspection for movement, clearing weep holes, and ensuring drainage systems remain unobstructed." },
      { question: "Can walls integrate with lighting and steps?", answer: "Yes — we frequently build terraced walls with built-in landscape lighting, integrated planting beds, and natural stone steps connecting levels." },
      { question: "Are permits required?", answer: "Walls over 4 feet typically require permits and may need engineering certification. We handle the entire permitting process for you." }
    ],
    ctaText: "Call us today or submit a project inquiry. Our calendar fills seasonally — start the conversation now.",
    relatedSlugs: ["boulder-retaining-walls", "grading-solutions", "paver-patios"]
  },
  {
    slug: "paver-patios",
    name: "Paver Patios",
    tagline: "Crafted for the way you live outdoors",
    image: paverPatios,
    seoTitle: "Paver Patios Greenville SC | Elevation Landscapes",
    h1: "Custom Paver Patios in Greenville, SC — Crafted for the Way You Live Outdoors",
    subheadline: "Bespoke paver patios where meticulous engineering and exceptional materials converge to create outdoor spaces that endure as beautifully as they are built.",
    bodyParagraphs: [
      "For homeowners who refuse to compromise, a luxury paver patio in Greenville is a statement about how you choose to live outdoors. It's the foundation of entertaining, relaxation, and family life — and it deserves the same attention to detail as any room inside your home.",
      "We work with natural travertine for Mediterranean warmth, Belgian block for old-world character, tumbled bluestone for understated elegance, and high-definition concrete pavers for contemporary precision. Custom patio design in Upstate SC begins with understanding your lifestyle, your architecture, and your outdoor vision.",
      "Installation begins with methodical excavation and a properly engineered compacted aggregate base designed for your specific soil conditions. Upstate SC's clay requires deeper base preparation than many regions — a critical detail that separates lasting installations from those that settle and shift.",
      "Interlocking pavers are set with precision, every joint finished with professional-grade polymeric sand that resists weed intrusion, inhibits insect activity, and locks the surface into a unified, stable whole. This hardscape patio contractor approach ensures decades of performance.",
      "Whether creating a sprawling entertaining terrace, intimate courtyard, or multi-level hardscape cascading across a slope — travertine paver patios and premium installations define the outdoor experience for Greenville's most discerning homeowners."
    ],
    trustSignals: [
      { title: "Decade of Focus", description: "Over a decade of exclusive luxury residential hardscape focus" },
      { title: "Premium Materials", description: "Travertine, Belgian block, and large-format concrete paver partnerships" },
      { title: "Engineered Bases", description: "Every installation engineered with compacted aggregate base and polymeric sand" },
      { title: "Prestigious Portfolio", description: "Curated portfolio across Greenville's most prestigious neighborhoods" },
      { title: "Dedicated Management", description: "Workmanship warranty with dedicated project management" }
    ],
    faqs: [
      { question: "How long does patio installation take?", answer: "1-3 weeks for most installations, depending on size, design complexity, and material type." },
      { question: "Travertine vs concrete pavers?", answer: "Travertine offers European warmth and natural tonal variation; concrete provides uniformity and a broader color range. Both perform well when properly installed." },
      { question: "How do patios perform in Upstate SC's climate?", answer: "A properly engineered compacted aggregate base is the key — we design specifically for local soil conditions and climate demands." },
      { question: "What is polymeric sand?", answer: "Specially formulated jointing material that resists washout, inhibits weed growth, and discourages insect activity between pavers." },
      { question: "What maintenance is needed?", answer: "Periodic rinsing, sweeping, and professional sealer application every few years to maintain appearance and protect against staining." },
      { question: "What does a paver patio cost?", answer: "Varies by size, design complexity, and material selection. We provide detailed proposals with material specifications after consultation." }
    ],
    ctaText: "Call us today to schedule your private design consultation.",
    relatedSlugs: ["pool-decks-pool-coping", "outdoor-kitchens", "outdoor-gas-fire-pits"]
  },
  {
    slug: "pool-decks-pool-coping",
    name: "Pool Decks & Coping",
    tagline: "Crafted for the exceptional home",
    image: poolDecks,
    seoTitle: "Pool Deck Installation Greenville SC | Elevation Landscapes",
    h1: "Pool Deck Installation in Greenville, SC — Crafted for the Exceptional Home",
    subheadline: "Luxury pool decks and pool coping that transform the space around your pool into an environment as refined as the home it surrounds.",
    bodyParagraphs: [
      "A pool is the centerpiece of outdoor living. The materials surrounding it — how they feel underfoot in July, how they age over a decade of sun and chlorine exposure — define whether the environment feels exceptional or merely adequate.",
      "Travertine pool decks dissipate heat naturally while offering beautiful tonal variation that only improves with age. We also source thermal pavers and cool deck pavers with slip-resistant finishes engineered for the pool environment. Luxury pool coping in Greenville demands materials that perform as beautifully as they look.",
      "Pool coping — the bullnose edge creating the finished transition between pool shell and deck surface — is one of the most technically precise elements in any hardscape project. We work with natural stone coping, porcelain, and pre-cast concrete coping profiles, each selected for the specific pool design and surrounding architecture.",
      "Upstate SC's climate means significant temperature fluctuation, occasional frost events, and prolonged summer heat. We select materials and installation systems rated specifically for these regional conditions, with proper expansion joints allowing natural movement without cracking or displacement.",
      "As a pool surround contractor serving SC, we coordinate with pool builders, electricians, and landscape designers to ensure the deck integrates seamlessly with the broader outdoor living environment."
    ],
    trustSignals: [
      { title: "Luxury Projects Only", description: "Exclusively luxury residential projects" },
      { title: "Premium Sourcing", description: "Travertine, natural stone, porcelain, and engineered paver sourcing" },
      { title: "Regional Expertise", description: "Upstate SC climate, soil, and building code expertise" },
      { title: "Single Point of Contact", description: "Comprehensive project management with dedicated oversight" },
      { title: "Broad Portfolio", description: "Portfolio across Greenville, Travelers Rest, Simpsonville, Spartanburg" }
    ],
    faqs: [
      { question: "What materials do you recommend?", answer: "Travertine is most popular for natural heat dissipation. We also install porcelain, thermal bluestone, and cool deck pavers based on design preference and performance needs." },
      { question: "What is bullnose coping?", answer: "A rounded-edge profile creating a finished, comfortable transition between the pool shell and the surrounding deck surface — both functional and aesthetic." },
      { question: "How does climate affect installation?", answer: "Materials are rated for freeze-thaw performance, and proper expansion joints are installed to accommodate natural seasonal movement without cracking." },
      { question: "How do you maintain travertine pool decks?", answer: "Resealing every 2-3 years with appropriate stone sealer and pH-neutral cleaning products to preserve appearance and weather resistance." },
      { question: "What is the timeline and planning?", answer: "2-4 weeks of construction; we recommend engaging in late winter or early spring for optimal material procurement and scheduling." },
      { question: "How is slip resistance ensured?", answer: "We use textured, industry-rated materials providing reliable traction when wet. No polished or smooth surfaces in pool areas — safety is non-negotiable." }
    ],
    ctaText: "Our calendar fills quickly during planning season. Contact us today to schedule a design consultation.",
    relatedSlugs: ["paver-patios", "outdoor-kitchens", "landscape-lighting"]
  },
  {
    slug: "outdoor-kitchens",
    name: "Outdoor Kitchens",
    tagline: "Custom design and master craftsmanship",
    image: outdoorKitchens,
    seoTitle: "Outdoor Kitchens Greenville SC | Elevation Landscapes",
    h1: "Outdoor Kitchens Greenville SC — Custom Design and Master Craftsmanship",
    subheadline: "From hand-selected natural stone to commercial-grade stainless steel appliances, outdoor kitchens that redefine what outdoor living means for your home.",
    bodyParagraphs: [
      "There's a particular evening unique to Upstate South Carolina — warm air carrying the scent of the Blue Ridge foothills, people you care about gathered around a table, food prepared in an extraordinary outdoor space. Luxury outdoor kitchen design in Greenville creates the setting for these moments.",
      "Every project is conceived from scratch for your specific architecture, property flow, and lifestyle. Natural stone veneer is hand-selected for color consistency and character. Outdoor cabinetry is engineered specifically for South Carolina's climate — the humidity, the temperature shifts, the years of daily use.",
      "Built-in grill islands are anchored in structural frameworks designed for longevity — not lightweight shells that shift and crack. Custom outdoor kitchens in Upstate SC demand construction methods that account for the region's unique demands.",
      "We specify commercial-grade stainless steel appliances: professional grills, refrigeration units, side burners, smokers, pizza ovens, and beverage centers from manufacturers whose names are synonymous with quality. All utility rough-in — gas line, electrical, and plumbing — is performed by licensed professionals.",
      "Outdoor kitchen contractor projects in Greenville typically range from $40,000 to well over $150,000 depending on scope, finishes, and appliance specifications. This is not an expense — it is an investment in how you live."
    ],
    trustSignals: [
      { title: "Combined Experience", description: "Over two decades combined hardscape and luxury landscape experience" },
      { title: "Exclusive Portfolio", description: "Portfolio across Greenville, Travelers Rest, and lake communities" },
      { title: "Top Partnerships", description: "Partnerships with top natural stone and commercial appliance suppliers" },
      { title: "Senior Design Team", description: "Senior design specialist and certified hardscape artisans on every project" },
      { title: "Full Warranty", description: "Full structural warranty with licensed utility integration" }
    ],
    faqs: [
      { question: "What does an outdoor kitchen cost?", answer: "$40,000 to well over $150,000 depending on scope, materials, appliance specifications, and the complexity of utility integration." },
      { question: "How long does the build take?", answer: "6-14 weeks from groundbreaking to final walkthrough, depending on design complexity and material lead times." },
      { question: "Can I use it year-round in Upstate SC?", answer: "Yes — Upstate SC's mild winters and extended warm season make outdoor kitchens a practical investment that extends your living space for the majority of the year." },
      { question: "What warranty is provided?", answer: "Full structural warranty on all masonry construction, plus manufacturer warranties on all specified appliances." },
      { question: "Can it integrate with my existing patio or pool?", answer: "Absolutely — unified design connecting outdoor kitchen, patio, pool area, and pergola produces the most cohesive and impressive result." },
      { question: "What is the design process?", answer: "On-property consultation, collaborative concept development with material samples and renderings, detailed proposal, then expert execution by our in-house team." }
    ],
    ctaText: "Call today and speak directly with a senior design specialist — no pressure, just an honest conversation about what's possible.",
    relatedSlugs: ["outdoor-gas-fire-pits", "paver-patios", "pool-decks-pool-coping"]
  },
  {
    slug: "outdoor-gas-fire-pits",
    name: "Gas Fire Pits",
    tagline: "Designed for the way you live",
    image: firePits,
    seoTitle: "Outdoor Gas Fire Pits Greenville SC | Elevation Landscapes",
    h1: "Custom Outdoor Gas Fire Pits in Greenville, SC — Designed for the Way You Live",
    subheadline: "Bespoke gas fire features where master craftsmanship, enduring materials, and site-specific design define your outdoor living experience.",
    bodyParagraphs: [
      "As dusk settles over the Blue Ridge foothills, a well-designed outdoor space transforms from beautiful to unforgettable. A custom gas fire pit in Greenville extends your outdoor living season deep into fall and winter, creates a natural gathering point, and elevates your entire exterior environment.",
      "Every built-in fire pit begins with site-specific design consultation — evaluating existing architecture, masonry palette, gas infrastructure, and how your family actually uses the outdoor space. Nothing is templated. Every luxury fire feature in Upstate SC is conceived and crafted for the specific property it serves.",
      "We specify premium natural gas burners engineered for clean, responsive flames and years of reliable operation. Materials are selected with the same discernment we bring to every project: natural bluestone, travertine, granite, and custom mortars matched to your home's existing palette.",
      "Fire glass media creates contemporary luminous effects — decorative tempered glass that refracts light for a vivid, dimensional flame presentation. All gas work is performed by licensed professionals, meeting or exceeding South Carolina code requirements.",
      "We do NOT install prefabricated or kit-based products. Every stone fire pit installation in Greenville is custom-designed, custom-built, and backed by our full weather-resistant construction warranty."
    ],
    trustSignals: [
      { title: "High-End Experience", description: "Over a decade of exclusive high-end residential experience" },
      { title: "Licensed Gas Work", description: "All installations with licensed gas professionals, fully code-compliant" },
      { title: "Curated Portfolio", description: "Curated portfolio of luxury fire feature projects across Greenville" },
      { title: "Premium Materials", description: "Bluestone, travertine, granite — weather-resistant premium systems" },
      { title: "Limited Acceptance", description: "Limited-acceptance model for focused senior-level craftsmanship" }
    ],
    faqs: [
      { question: "Gas vs wood-burning?", answer: "Gas fire pits produce no wood smoke, ash, or airborne sparks. They ignite at a valve turn or remote touch — clean, controlled, and effortless every time." },
      { question: "How do they hold up in Upstate SC's climate?", answer: "Weather-resistant materials and professional sealers are engineered for exterior longevity — delivering decades of reliable performance through all seasons." },
      { question: "What is the typical timeline?", answer: "6-12 weeks from initial consultation to completion, depending on design complexity and material lead times." },
      { question: "What is fire glass media?", answer: "Decorative tempered glass pieces that refract light to create a vivid, dimensional flame effect. Easy to clean, doesn't degrade, and adds contemporary visual depth." },
      { question: "Does a fire pit add property value?", answer: "Consistently — a custom fire feature distinguishes properties in Greenville's luxury real estate market and enhances the outdoor living experience significantly." },
      { question: "Can I buy a prefab unit and have you install it?", answer: "No — every fire feature we create is custom-designed and custom-built for the specific property. We do not install kit-based or prefabricated products." }
    ],
    ctaText: "Reach out today to schedule your private design consultation.",
    relatedSlugs: ["outdoor-kitchens", "paver-patios", "landscape-lighting"]
  },
  {
    slug: "new-plant-installation",
    name: "New Plant Installation",
    tagline: "Crafted for the exceptional residential property",
    image: plantInstallation,
    seoTitle: "New Plant Installation Greenville SC | Elevation Landscapes",
    h1: "New Plant Installation in Greenville, SC — Crafted for the Exceptional Residential Property",
    subheadline: "Horticultural precision and refined aesthetic vision transforming Greenville properties into landscapes of enduring distinction.",
    bodyParagraphs: [
      "We don't simply dig a hole and place a plant. Luxury landscape planting in Greenville is a design discipline requiring comprehensive site assessment — soil composition, drainage capacity, sun exposure mapping, and microclimate conditions unique to each property.",
      "We curate plant palettes that are visually extraordinary and ecologically intelligent. Custom garden design in Upstate SC must account for the region's clay soils, humidity patterns, late frost potential, and intense summer heat — factors that determine whether a planting thrives or merely survives.",
      "Premium ornamental plant installation in SC uses material sourced from specialty growers: specimen trees with established canopies, rare ornamental shrubs, and refined native cultivars suited to the Piedmont climate. These aren't retail garden center plants — they're investment-grade selections chosen for form, scale, and character.",
      "Specimen tree planting in Greenville is among our most transformative services. A single well-chosen tree — a mature Japanese maple framing a motor court, a centuries-old live oak anchoring a rear vista — can redefine a property's entire character.",
      "Every installation follows rigorous root ball preparation protocols, proper soil amendment based on laboratory analysis, and seasonal planting schedules optimized for establishment success. Native cultivars and premium ornamentals receive the same meticulous attention to ensure lasting performance."
    ],
    trustSignals: [
      { title: "High-End Experience", description: "Over a decade of exclusive high-end residential experience" },
      { title: "Specialty Sourcing", description: "Premium sourcing from specialty growers — rare specimens unavailable at retail" },
      { title: "Rigorous Installation", description: "Professional root ball preparation and laboratory-based soil amendment" },
      { title: "Seasonal Planning", description: "Dedicated seasonal planting schedules and post-installation care programs" },
      { title: "Referral-Built", description: "Reputation built entirely on referrals from discerning homeowners" }
    ],
    faqs: [
      { question: "What is your planting process?", answer: "Site evaluation, curated plant palette selection, and a precise installation plan including soil amendment, root ball preparation, and optimal seasonal scheduling." },
      { question: "Where do you source plants?", answer: "Specialty growers who cultivate premium ornamentals, rare specimen trees, and refined native cultivars unavailable through retail garden centers." },
      { question: "How does Greenville expertise improve outcomes?", answer: "We select material specifically for Piedmont clay soils, high humidity, late frost potential, and early summer heat — ensuring every plant thrives in its specific location." },
      { question: "Can you install large mature specimens?", answer: "Absolutely — specimen tree planting is among our most transformative services. A single mature tree can dramatically elevate a luxury property's character." },
      { question: "When is the best time to plant?", answer: "Early spring or fall for moderate temperatures and optimal root establishment. We design planting schedules accommodating multiple installation phases throughout the year." },
      { question: "What warranty do you offer?", answer: "Comprehensive warranty coverage and ongoing care guidance. Every project is the beginning of a lasting relationship with your landscape." }
    ],
    ctaText: "Call us today to schedule a private consultation.",
    relatedSlugs: ["landscape-remediation", "sod-and-seeding", "irrigation-installation-repair"]
  },
  {
    slug: "sod-and-seeding",
    name: "Sod & Seeding",
    tagline: "Precision turf craftsmanship for the discerning homeowner",
    image: sodSeeding,
    seoTitle: "Sod Installation Greenville SC | Elevation Landscapes",
    h1: "Sod Installation in Greenville, SC — Precision Turf Craftsmanship for the Discerning Homeowner",
    subheadline: "Uncompromising standards delivering lush, expertly established turf that transforms the entire character of your property.",
    bodyParagraphs: [
      "A truly exceptional lawn is not the result of simply laying sod — it results from deliberate decisions about soil chemistry, turf variety, grade preparation, drainage patterns, and installation timing. Luxury lawn installation in Greenville begins with understanding that what's beneath the surface determines everything above it.",
      "We begin every project with comprehensive soil analysis — testing compaction levels, pH balance, organic matter content, and drainage patterns. This isn't optional; it's the foundation of every successful turf installation.",
      "Bermuda and Zoysia are the most sought-after turf varieties in Upstate SC. Bermuda delivers dense, resilient coverage with excellent drought tolerance — ideal for open, sun-drenched lawns. Zoysia offers a lush, carpet-like texture with deep green color that holds beautifully through Greenville's transition zone climate.",
      "For larger properties or sloped terrain, our hydroseeding programs provide uniform coverage with professional-grade seed blends. Premium turf installation in Greenville demands proper soil preparation as the non-negotiable first step — thorough grading, amendment, and compaction correction before any turf arrives on site.",
      "Installation is only as good as the preparation — seams carefully offset, edges cleanly cut against hardscape and beds, every roll firmed for root contact and irrigated precisely. Our professional seeding contractor standards ensure results that hold season after season."
    ],
    trustSignals: [
      { title: "Exclusive Residential", description: "Exclusively high-end residential landscapes in Greenville and Upstate SC" },
      { title: "Soil Analysis", description: "Comprehensive laboratory soil analysis on every project" },
      { title: "Premium Turf", description: "Premium Bermuda and Zoysia from vetted high-grade turf farms" },
      { title: "Full-Service", description: "Full-service from soil prep through final edging and irrigation setup" },
      { title: "Lasting Results", description: "Exceptional craftsmanship with results that hold season after season" }
    ],
    faqs: [
      { question: "What sod is best for Greenville?", answer: "Zoysia for dense, refined texture in mixed sun/shade; Bermuda for sun-drenched areas requiring durability and drought tolerance." },
      { question: "What does soil prep involve?", answer: "Laboratory soil analysis, professional amendment based on results, precision grading, and compaction correction before any turf is installed." },
      { question: "When is hydroseeding better than sod?", answer: "For larger properties, slopes, or areas where conventional sod installation is less practical — hydroseeding provides uniform professional-grade coverage." },
      { question: "What maintenance is needed after installation?", answer: "Consistent watering for the first 2-3 weeks is critical for root establishment. After that, warm-season grasses are remarkably low-maintenance." },
      { question: "When is the best time of year?", answer: "Late spring through early summer for sod installation; late summer into early fall for seeding — aligning with optimal growing conditions." },
      { question: "Where do you source your sod?", answer: "Exclusively from premium turf farms meeting our standards for variety purity, density, root depth, and pest-free certification." }
    ],
    ctaText: "Contact us today. Exceptional outdoor environments begin with a single conversation.",
    relatedSlugs: ["grading-solutions", "irrigation-installation-repair", "new-plant-installation"]
  },
  {
    slug: "landscape-lighting",
    name: "Landscape Lighting",
    tagline: "Architectural illumination for exceptional homes",
    image: landscapeLighting,
    seoTitle: "Landscape Lighting Greenville SC | Elevation Landscapes",
    h1: "Landscape Lighting Greenville SC — Architectural Illumination Designed for Exceptional Homes",
    subheadline: "Your property represents years of vision and investment. After dark, it should be no different. Luxury outdoor lighting revealing the full character of your home and grounds, night after night.",
    bodyParagraphs: [
      "Just after dusk, a property either retreats into darkness or reveals itself in entirely new light. We approach luxury outdoor lighting in Greenville as foundational, not afterthought — a design layer that transforms every element of your landscape after the sun sets.",
      "Every project starts with comprehensive site evaluation — architecture, plantings, hardscape elements, natural sightlines, and security considerations — then a layered lighting plan as deliberate and refined as the landscape itself. LED landscape lighting in Upstate SC must account for the region's dense canopy, seasonal foliage changes, and varied terrain.",
      "We specify professional-grade LED fixtures: solid brass and cast aluminum housings, architectural-grade luminaires unavailable at consumer retail levels. Our low-voltage lighting contractor approach uses properly engineered transformer and wiring infrastructure, sized and zoned for today's installation with room for future expansion.",
      "We employ moonlighting techniques — fixtures positioned high in mature tree canopies casting soft, dappled light that mimics natural moonlight filtering through leaves. Combined with uplighting on specimen trees and architectural elements, plus subtle pathway lighting, the effect is both dramatic and natural.",
      "Upstate SC's humidity, thunderstorms, and temperature swings require exacting weatherproofing at every component — wet-location-rated fixtures, direct-burial cable, and sealed connections throughout. Architectural lighting design in SC demands this level of attention to ensure lasting performance."
    ],
    trustSignals: [
      { title: "Exclusive Focus", description: "Over a decade of exclusive luxury residential focus" },
      { title: "Trade-Only Fixtures", description: "Architectural-grade LED fixtures and transformers unavailable at retail" },
      { title: "Prestigious Portfolio", description: "Portfolio across Greenville's most prestigious neighborhoods" },
      { title: "Comprehensive Warranty", description: "Workmanship warranty and structured maintenance programs" },
      { title: "Climate Expertise", description: "Deep Upstate SC climate familiarity for lasting durability" }
    ],
    faqs: [
      { question: "What is the design process?", answer: "On-site consultation, layered lighting plan incorporating uplighting, moonlighting, and pathway techniques, fixture selections with samples, and a detailed proposal." },
      { question: "What fixture types do you use?", answer: "Professional-grade LED fixtures in solid brass, cast aluminum, and marine-grade materials sourced exclusively from trade-only manufacturers." },
      { question: "How does low-voltage lighting work?", answer: "A 12-volt system powered through a professional transformer — significantly more energy-efficient, longer-lasting, and safer than line-voltage alternatives." },
      { question: "How does Upstate SC's climate affect lighting?", answer: "Wet-location-rated fixtures, direct-burial cable, and professionally weatherproofed connections at every point ensure reliable performance through all conditions." },
      { question: "What is moonlighting?", answer: "Fixtures positioned high in tree canopies aimed downward, recreating the soft, diffused quality of natural moonlight — one of our most transformative and sought-after techniques." },
      { question: "What warranty and maintenance do you offer?", answer: "Comprehensive warranty on materials and workmanship, plus scheduled maintenance programs for seasonal adjustments, bulb replacement, and system optimization." }
    ],
    ctaText: "Call us today to schedule a private consultation and discover what's possible when landscape lighting is elevated to the level of true design.",
    relatedSlugs: ["custom-water-features", "outdoor-kitchens", "paver-patios"]
  }
] as ServiceData[]).sort((a, b) => a.name.localeCompare(b.name));

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): ServiceData[] {
  return slugs.map(slug => services.find(s => s.slug === slug)).filter(Boolean) as ServiceData[];
}
