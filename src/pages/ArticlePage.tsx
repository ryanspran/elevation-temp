import { useParams, Link, Navigate } from "react-router-dom";
import { Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";

import outdoorKitchenHero from "@/assets/articles/outdoor-kitchen-hero.jpg";
import outdoorKitchenDetail from "@/assets/articles/outdoor-kitchen-detail.jpg";
import landscapeLightingHero from "@/assets/articles/landscape-lighting-hero.jpg";
import landscapeLightingDetail from "@/assets/articles/landscape-lighting-detail.jpg";
import retainingWallsHero from "@/assets/articles/retaining-walls-hero.jpg";
import retainingWallsDetail from "@/assets/articles/retaining-walls-detail.jpg";
import outdoorLivingHero from "@/assets/articles/outdoor-living-hero.jpg";
import outdoorLivingDetail from "@/assets/articles/outdoor-living-detail.jpg";
import stoneVsPaversHero from "@/assets/articles/stone-vs-pavers-hero.jpg";
import stoneVsPaversDetail from "@/assets/articles/stone-vs-pavers-detail.jpg";
import drainageHero from "@/assets/articles/drainage-hero.jpg";
import drainageDetail from "@/assets/articles/drainage-detail.jpg";
import hardscapeContractorHero from "@/assets/articles/hardscape-contractor-hero.jpg";
import hardscapeContractorDetail from "@/assets/articles/hardscape-contractor-detail.jpg";
import plantDirectoryHero from "@/assets/articles/plant-directory-hero.jpg";
import plantDirectoryDetail from "@/assets/articles/plant-directory-detail.jpg";

interface ArticleData {
  title: string;
  category: string;
  heroImage: string;
  detailImage: string;
  seoTitle: string;
  seoDescription: string;
  sections: { heading?: string; body: string }[];
}

const articles: Record<string, ArticleData> = {
  "outdoor-kitchen-greenville": {
    title:
      "Transform Your Backyard: Exploring the Benefits of Adding an Outdoor Kitchen in Upstate SC",
    category: "Outdoor Living",
    heroImage: outdoorKitchenHero,
    detailImage: outdoorKitchenDetail,
    seoTitle:
      "Outdoor Kitchen Benefits in Upstate SC | Elevation Landscapes",
    seoDescription:
      "Discover how an outdoor kitchen can boost home value, enhance entertaining, and take advantage of Upstate SC's year-round climate.",
    sections: [
      {
        body: "As more homeowners in Greenville, SC, seek ways to enhance their living spaces, outdoor kitchens have emerged as a popular trend, bringing the joys of alfresco dining to the heart of their homes. With the Upstate's moderate climate, growing real estate market, and culture of community bonding, investing in an outdoor kitchen offers both aesthetic and functional benefits. Let's explore how this enticing upgrade could transform your living experience.",
      },
      {
        heading: "Boosting Home Value and Real Estate Appeal",
        body: "In Greenville's dynamic real estate landscape, homes with unique amenities such as outdoor kitchens are highly sought-after. These amenities increase your home's usable square footage and enhance its curb appeal, a crucial factor in a competitive market. Real estate experts in the area often note that features like fully-equipped outdoor kitchens can offer a significant return on investment, similar to indoor kitchen renovations. Not only do these spaces make your home more attractive to potential buyers, but they also provide a distinctive edge, setting your property apart.",
      },
      {
        heading: "Year-Round Enjoyment in Upstate Climate",
        body: "One of the great perks of living in the Upstate is the climate's suitability for outdoor living. With mild winters and long, warm summers, an outdoor kitchen can be enjoyed almost all year round. Whether it's spring gatherings, summer barbecues, or cozy fall evenings by the grill, Greenville's weather supports a wide range of outdoor activities. To maximize usability, consider weather-resistant materials and designs that offer shelter from the elements, such as retractable awnings and pergolas.",
      },
      {
        heading: "Lifestyle and Entertaining Benefits",
        body: "Outdoor kitchens provide an exceptional opportunity to enhance your lifestyle and make entertaining effortless. Imagine hosting cookouts, birthday parties, or football watch parties without having to dash indoors for supplies. By incorporating features like built-in grills, pizza ovens, and refrigerators, you can create a versatile environment that caters to any occasion. These spaces not only serve as culinary hubs but also as inviting focal points for friends and family to gather, reinforcing community ties and fostering connections.",
      },
      {
        heading: "Common Features and Design Ideas for Greenville",
        body: "When designing an outdoor kitchen in Greenville, consider popular features that align with local preferences. Essential elements often include a grilling station, sink, prep area, refrigerator, and bar seating. For flooring, opt for durable materials such as pavers or natural stone, which offer both style and longevity. Customization is key, so plan your design around existing patios or porches to ensure a seamless flow. Integrated lighting and stylish seating can further enhance usability and elegance, making your outdoor kitchen a true extension of your home.",
      },
      {
        heading: "Local Considerations: Permits, Materials, and Sustainability",
        body: "Before diving into construction, be mindful of the local regulations. Many outdoor kitchen projects require permits for electrical, plumbing, and structural alterations. It's advisable to work with local professionals who are familiar with Greenville's building codes to streamline this process. When it comes to material selection, prioritize those that withstand the region's humidity and temperature variations, such as stainless steel appliances and granite countertops. Additionally, consider incorporating sustainable elements like solar lighting or rainwater harvesting systems to enhance your kitchen's eco-friendliness.",
      },
      {
        heading: "Next Steps for Property Owners",
        body: "Adding an outdoor kitchen is a significant, yet rewarding investment for homeowners in Greenville, SC. By increasing your home's value, enhancing your lifestyle, and taking advantage of the Upstate's climate, you can create a vibrant outdoor living space that meets your needs year-round. If you're considering this exciting upgrade, start by consulting with local designers and builders, get inspired by the latest trends, and ensure your design aligns with both your vision and practical requirements. Ultimately, an outdoor kitchen offers a way to enjoy the beauty of the outdoors while enhancing your home's entertaining potential.",
      },
      {
        body: "For Greenville homeowners considering an outdoor kitchen project, Elevation Landscapes exemplifies quality and personalization in crafting unique outdoor environments. Specializing in custom designs, this local company prides itself on delivering seamless indoor-outdoor transitions, ensuring your new space is practical and beautifully integrated with your existing home. With a strong local presence and a full-service design/build approach, Elevation Landscapes manages every aspect of your project, from initial concept to final installation, providing peace of mind with their commitment to quality craftsmanship and personalized service. Their expertise in creating cohesive, year-round outdoor environments makes them a trusted partner for bringing your dream backyard to life. Engaging Elevation Landscapes means investing in a vibrant outdoor living space perfectly tailored to enjoy the Upstate's pleasant climate while enhancing your home's value and lifestyle.",
      },
    ],
  },
  "retaining-walls-upstate-sc": {
    title:
      "Retaining Walls on Sloped Lots in Upstate\u00a0SC: Boulder, Block, or Natural\u00a0Stone?",
    category: "Hardscaping",
    heroImage: retainingWallsHero,
    detailImage: retainingWallsDetail,
    seoTitle:
      "Retaining Walls on Sloped Lots in Upstate SC | Elevation Landscapes",
    seoDescription:
      "Learn the pros and cons of boulder, block, and natural stone retaining walls for sloped lots in Greenville, Simpsonville, and Greer, SC.",
    sections: [
      {
        body: "In the stunning landscape of Upstate South Carolina, sloped lots are a common feature, particularly across Greenville, Simpsonville, and Greer. While these elevations offer breathtaking views, they also present unique challenges, such as drainage and erosion issues. For homeowners facing these difficulties, installing a retaining wall can be a highly effective solution. But what material should you choose? Boulder, block, or natural stone—each has its advantages and ideal applications.",
      },
      {
        heading: "Understanding the Need for Retaining Walls",
        body: "Retaining walls are essential components for managing water flow and preventing soil erosion on sloped properties. By creating a stable and level surface, retaining walls not only solve functional issues but also add an element of beauty and structure to your landscape. Whether you're battling erosion, improving drainage, or simply enhancing your property's aesthetic appeal, choosing the right type of retaining wall is crucial.",
      },
      {
        heading: "Boulder Retaining Walls",
        body: "Boulder retaining walls are a popular choice for their natural beauty and rugged strength. Ideal for properties that aim to maintain a rustic or organic aesthetic, boulders seamlessly integrate into the surrounding environment. These walls are highly durable and require minimal maintenance, making them an excellent option for homeowners in Greenville, SC, looking for a natural solution that can withstand the test of time.",
      },
      {
        heading: "Block Retaining Walls",
        body: "For those seeking a more uniform and polished appearance, block retaining walls offer versatility and precision. Manufactured from concrete or stone, blocks are engineered for strength and consistency. This option is particularly suitable for homeowners in Simpsonville who require precise construction and a variety of design possibilities. Block walls are also favored for their ease of installation and cost-effectiveness, making them a practical choice for many.",
      },
      {
        heading: "Natural Stone Retaining Walls",
        body: "Natural stone walls combine the best of both worlds — elegance and resilience. Offering a timeless appeal, these walls use stones like granite, limestone, or fieldstone to create a sophisticated, textured surface. Natural stone is perfect for creating a luxurious look that complements chic homes in Greer. While they may require a higher upfront investment, their unmatched beauty and durability provide excellent long-term value.",
      },
      {
        heading: "Factors to Consider When Choosing Your Retaining Wall",
        body: "When selecting between boulder, block, or natural stone retaining walls, Greenville, SC, homeowners should consider several factors. Slope and soil type are critical in determining the best material and design for your retaining wall. Aesthetic goals matter—consider how the wall will blend with your existing landscape design and home architecture. And while all options provide benefits, your budget might dictate the choice of materials based on installation, material costs, and long-term maintenance.",
      },
      {
        body: "Choosing the right retaining wall for your sloped lot in Upstate SC is vital for addressing drainage and erosion while enhancing the overall appeal of your landscape. Whether you prefer the natural allure of boulders, the structured elegance of blocks, or the timeless sophistication of natural stone, there's a solution that suits your needs. By understanding the characteristics and advantages of each material, you can make a well-informed decision that reflects your personal style and meets functional requirements. Address your property's challenges head-on and transform your outdoor space into a functional, beautiful haven.",
      },
    ],
  },
  "outdoor-living-greenville": {
    title:
      "The Complete Guide to Outdoor Living Spaces in Upstate\u00a0SC",
    category: "Outdoor Living",
    heroImage: outdoorLivingHero,
    detailImage: outdoorLivingDetail,
    seoTitle:
      "Complete Guide to Outdoor Living Spaces in Greenville SC | Elevation Landscapes",
    seoDescription:
      "Explore every element of outdoor living — patios, kitchens, fire pits, water features, and lighting — for Greenville, SC homeowners.",
    sections: [
      {
        body: "There's something uniquely captivating about outdoor living spaces, especially in the vibrant community of Greenville, SC. With the perfect blend of mild climate, picturesque landscapes, and an affinity for quality home life, Greenville is an ideal location for transforming your backyard into a haven of relaxation and entertainment. From patios and outdoor kitchens to fire pits, water features, and strategic lighting, this guide explores every element to help you create an exceptional outdoor living space.",
      },
      {
        heading: "Patios: The Foundation of Outdoor Living",
        body: "A well-designed patio serves as the foundation of your outdoor escape. It provides a versatile space for dining, lounging, and entertaining. When designing your patio in Greenville, consider materials such as stone, brick, or concrete pavers, each offering a unique aesthetic and level of durability. Focusing on cohesion with your home's architecture and landscape ensures that the patio enhances your overall property value and appeal.",
      },
      {
        heading: "Outdoor Kitchens: Culinary Delight in Your Backyard",
        body: "Outdoor kitchens have become a hallmark of luxury in Greenville's outdoor living spaces. Equip your kitchen with essentials like a high-quality grill, refrigerator, and sink to make cooking a breeze. Consider adding countertops made from durable materials such as granite or stainless steel that can withstand the elements. Personalizing your space with a bar area, pizza oven, or smoker can elevate your culinary endeavors, making your home the go-to spot for gatherings.",
      },
      {
        heading: "Fire Pits: Warmth and Ambiance",
        body: "Fire pits hold a special place in the hearts of those who enjoy spending evenings outdoors. They provide warmth, light, and an inviting atmosphere, perfect for cool Greenville nights. Whether you prefer a traditional wood-burning pit or a more convenient gas option, the design possibilities are endless. Pair your fire pit with comfortable seating to create a cozy nook where friends and family can gather for storytelling or marshmallow roasting.",
      },
      {
        heading: "Water Features: Tranquility and Elegance",
        body: "Introducing a water feature into your outdoor space can add a touch of elegance and tranquility. Whether you select a cascading waterfall, a serene pond, or a modern fountain, water features have the power to soothe and refresh. When implemented strategically, they not only enhance the aesthetic appeal but also serve as focal points in your landscape, attracting local wildlife and creating an oasis in your backyard.",
      },
      {
        heading: "Lighting: Setting the Mood and Enhancing Safety",
        body: "The finishing touch to any outdoor living space is thoughtful lighting. Beyond aesthetics, lighting plays a crucial role in safety and security. String lights, pathway markers, and wall sconces can illuminate your outdoor areas, highlighting key elements and creating an enchanting ambiance. In Greenville's temperate evenings, good lighting design allows you to enjoy your backyard long after the sun has set.",
      },
      {
        heading: "Bringing It All Together: Planning Your Outdoor Space",
        body: "When designing an outdoor living space, consider how each element works together to create a cohesive and functional environment. Sketch a layout that optimizes flow and accessibility, ensuring comfort and convenience. Whether you're starting from scratch or enhancing existing features, the integration of patios, kitchens, fire pits, water features, and lighting can transform your backyard into a personal paradise.",
      },
      {
        body: "Elevating your outdoor experience requires expertise and vision, which is where teams like Elevation Landscapes come into play. As leading outdoor living contractors in Greenville, we specialize in bringing your outdoor dreams to life, offering comprehensive services that deliver enduring style and functionality. Our passion for creating bespoke outdoor spaces means every project is tailored to meet your specific needs and tastes, turning your backyard into an exceptional living area that complements your lifestyle. Let us guide you through your transformation, ensuring that your outdoor space becomes a cornerstone of enjoyment and a reflection of your personal style.",
      },
    ],
  },
  "landscape-lighting-greenville": {
    title:
      "Illuminate Your Home: The Transformative Benefits of Landscape Lighting in Greenville,\u00a0SC",
    category: "Design Tips",
    heroImage: landscapeLightingHero,
    detailImage: landscapeLightingDetail,
    seoTitle:
      "Landscape Lighting Benefits in Greenville SC | Elevation Landscapes",
    seoDescription:
      "Discover the transformative benefits of professional landscape lighting for high-end homes in Greenville and Upstate South Carolina.",
    sections: [
      {
        body: "In the picturesque region of Greenville and Upstate South Carolina, where stunning natural beauty meets elegant architecture, high-end homeowners are increasingly leveraging the power of landscape lighting. More than just an aesthetic enhancer, landscape lighting plays a pivotal role in redefining the allure and functionality of outdoor spaces.",
      },
      {
        heading: "Enhanced Curb Appeal",
        body: "For high-end homes, first impressions matter. Landscape lighting accentuates architectural features, showcases meticulously manicured gardens, and highlights sculptures or water features. Thoughtfully placed lights can transform a residence from ordinary to extraordinary, capturing the attention of passersby and visitors alike. The right lighting emphasizes the grandeur and elegance synonymous with upscale Greenville neighborhoods.",
      },
      {
        heading: "Increased Security and Safety",
        body: "Security is a prime concern for homeowners, and landscape lighting provides a practical solution. Strategically installed lights deter potential intruders by eliminating dark areas and shadows around the property. Well-lit gardens and pathways also ensure safety, reducing the risk of slips and falls. In Upstate SC, where properties often include expansive lawns and intricate designs, effective lighting becomes even more critical.",
      },
      {
        heading: "Extended Living Space",
        body: "In Greenville and the surrounding areas, the moderate climate encourages outdoor living. Landscape lighting extends the usability of outdoor spaces well into the evening. Whether hosting a dinner party on the patio or enjoying a quiet night in the garden, the right lighting transforms yards into inviting, usable spaces where homeowners can unwind or entertain.",
      },
      {
        heading: "Increased Property Value",
        body: "Landscape lighting is a wise investment that offers significant returns. High-end homes with well-designed lighting schemes often see increased property values and faster sales times. Potential buyers are drawn to homes that offer the perfect balance of form and function, where outdoor lighting plays a critical role.",
      },
      {
        heading: "Energy Efficiency and Eco-Friendliness",
        body: "Advancements in technology have made energy-efficient options like LED lights a popular choice. These lights consume less electricity and produce minimal heat, translating to cost savings and a reduced carbon footprint. For environmentally conscious homeowners in Upstate SC, LED landscape lighting is an attractive solution that blends luxury with sustainability.",
      },
      {
        heading: "Customization and Personalization",
        body: "Every homeowner has unique preferences, and landscape lighting allows for personalization. Whether opting for soft, ambient lights or bold, vibrant hues, homeowners can tailor their lighting to reflect their style. The lush landscapes of Greenville complemented by personalized lighting schemes make for a majestic sight that's as unique as its owner.",
      },
      {
        body: "In the enchanting realm of high-end homes in Greenville and Upstate SC, landscape lighting is an art form that marries beauty with utility. At the forefront of this transformation is Elevation Landscapes. With extensive experience and a deep understanding of local aesthetics, we have established ourselves as leaders in creating captivating outdoor environments. Our commitment to innovation and excellence ensures that every lighting project not only enhances property value but also enriches the quality of life for homeowners across the region. Illuminate your home with us and experience the elevation of your outdoor living space.",
      },
    ],
  },
  "natural-stone-vs-pavers": {
    title: "Natural Stone vs. Concrete Pavers: Which Is Right for Your Upstate\u00a0SC Home?",
    category: "Hardscaping",
    heroImage: stoneVsPaversHero,
    detailImage: stoneVsPaversDetail,
    seoTitle: "Natural Stone vs Concrete Pavers Upstate SC | Elevation Landscapes",
    seoDescription: "Compare natural stone and concrete pavers for pathways, patios, and pool decks. Learn which material suits your Upstate SC home best.",
    sections: [
      {
        body: "Choosing the right material for outdoor projects such as stone pathways, paver patios, or pool decks can transform the aesthetic and functionality of your home. In Upstate SC, the decision often boils down to natural stone versus concrete pavers. Both options offer unique benefits, but understanding their differences is crucial for homeowners interested in enhancing their outdoor spaces. This guide explores the key characteristics of natural stone and concrete pavers, helping you make an informed choice for your Upstate South Carolina home.",
      },
      {
        heading: "Aesthetic Appeal and Style",
        body: "Natural Stone: For homeowners captivated by an organic, timeless look, natural stone offers unmatched beauty. Each stone is unique, with rich textures and colors that bring an elegant, sophisticated feel. Whether you opt for flagstone, slate, or limestone, the natural variations provide a distinctive charm that simply can't be replicated.\n\nConcrete Pavers: If you're after versatility in design, concrete pavers are highly customizable. Available in a vast array of shapes, sizes, and colors, they can mimic the look of natural stone or offer completely modern designs. For those looking to match specific architectural styles or color schemes, concrete pavers provide a palette of endless possibilities.",
      },
      {
        heading: "Durability and Maintenance",
        body: "Natural Stone: Known for its durability, natural stone can withstand extreme weather conditions, making it an excellent choice for Upstate SC's diverse climate. While periodic sealing might be required to protect porous stones from stains, its robustness largely compensates for the occasional maintenance needed.\n\nConcrete Pavers: These are engineered for strength and resilience. They resist cracking under pressure, making them ideal for high-traffic areas like driveways or pool decks. Maintenance is generally straightforward, with regular cleaning and sealing prolonging their lifespan and appearance.",
      },
      {
        heading: "Cost Considerations",
        body: "Natural Stone: Typically, the initial investment for natural stone is higher due to its extraction, transportation, and labor-intensive installation. However, many homeowners find this investment worthwhile for the aesthetic and long-term durability it offers.\n\nConcrete Pavers: Generally more budget-friendly, concrete pavers provide a cost-effective solution without sacrificing style or longevity. They offer an upscale look at a fraction of the cost of natural stone, making them an attractive option for homeowners mindful of their budget.",
      },
      {
        heading: "Installation Process",
        body: "Natural Stone: Installation can be more labor-intensive and requires skilled craftsmanship to fit irregular shapes seamlessly. This meticulous process ensures a high-quality finish but may extend the project timeline.\n\nConcrete Pavers: Installation is often quicker and less labor-intensive, as pavers are uniform and fit together seamlessly. This efficiency can reduce labor costs, making them a more accessible option for many projects.",
      },
      {
        heading: "Environmental Impact",
        body: "Natural Stone: As a natural product, stone is eco-friendly and can be locally sourced to reduce transportation emissions, contributing positively to a sustainable building approach.\n\nConcrete Pavers: These can be manufactured with recycled materials and designed to be permeable, reducing water runoff and supporting eco-friendly landscaping efforts.",
      },
      {
        heading: "Making Your Decision",
        body: "Ultimately, the choice between natural stone and concrete pavers will depend on your personal preferences, budget, and the specific demands of your outdoor project. Both materials offer significant advantages, and each can distinctly enhance the beauty and functionality of pathways, patios, and pool decks in your Upstate SC home.\n\nWhether you're drawn to the timeless elegance of natural stone or the versatility and affordability of concrete pavers, making an informed decision ensures that your outdoor spaces become lasting assets. For expert guidance, Elevation Landscapes can help you explore your options, bringing together beauty and practicality in your outdoor projects. Our commitment to quality service means your home is in experienced hands, creating landscapes that are as enduring as they are stunning.",
      },
    ],
  },
  "drainage-before-landscaping": {
    title: "Why Upstate SC Homeowners Need a Proper Drainage System Before Any Landscaping Project",
    category: "Drainage",
    heroImage: drainageHero,
    detailImage: drainageDetail,
    seoTitle: "Proper Drainage Before Landscaping in Upstate SC | Elevation Landscapes",
    seoDescription: "Learn why addressing drainage first is essential for protecting your landscape investment on Upstate SC's sloped terrain and heavy rainfall.",
    sections: [
      {
        body: "Landscaping in beautiful Upstate South Carolina—particularly in areas like Greenville—is not without its challenges. The region is known for its picturesque sloped terrain and abundant rainfall, which can lead to significant drainage issues if not properly addressed. Before embarking on any landscaping project, ensuring a robust drainage system is crucial for protecting your investment and maximizing the longevity of your outdoor space. Here's why understanding and prioritizing proper drainage is essential for Upstate SC homeowners.",
      },
      {
        heading: "The Challenges of Sloped Terrain and Heavy Rainfall",
        body: "Upstate SC's sloped lots provide stunning views but also pose challenges for water management. Heavy rainfall common to the region can lead to water accumulation, soil erosion, and even flooding if not managed properly. Without effective drainage, your carefully planned landscaping projects can quickly become waterlogged, resulting in long-term damage or costly repairs.",
      },
      {
        heading: "Why Proper Drainage is Essential",
        body: "A well-designed drainage system safeguards your property from water damage. Excess water runoff can undermine structures, wash away soil, and damage plant roots. Implementing proper drainage protects both your home's foundation and landscape investment.\n\nSloped yards are particularly susceptible to erosion, which can wreak havoc on your lawn and garden beds. Effective drainage solutions channel rainwater away from vulnerable areas, maintaining your landscape's integrity and appearance.\n\nOverwatering can suffocate plants and invite disease, diminishing their vitality. Proper drainage ensures that water is directed away efficiently, providing plants with the optimal moisture level for growth.\n\nPoor drainage can render outdoor areas unusable, especially after heavy rains. By ensuring proper water flow and drainage, you can maintain dry and accessible paths, patios, and garden areas year-round.",
      },
      {
        heading: "Key Components of an Effective Drainage System",
        body: "Proper grading is critical to directing water away from structures and toward appropriate drainage areas. A subtle slope can be created to guide water flow without compromising the aesthetic of your landscape.\n\nSolutions such as French drains or pipe systems effectively manage water by collecting and redirecting it underground. These systems are particularly useful in areas prone to excessive surface water.\n\nRain gardens and swales are natural solutions that absorb and filter runoff, integrating seamlessly into your landscape design. They offer an eco-friendly approach to managing water flow, adding both beauty and functionality.",
      },
      {
        heading: "How Elevation Landscapes Can Help",
        body: "At Elevation Landscapes, our expertise in grading and underground drainage systems positions us as leaders in tackling the unique challenges of Upstate SC. Before you even begin selecting a contractor for your landscaping project, consulting with experts in drainage ensures a solid foundation and peace of mind. Our experienced team evaluates your property, designs tailored solutions, and executes plans that preserve your landscape's beauty while safeguarding your investments.\n\nChoosing Elevation Landscapes means partnering with professionals who understand the nuances of Upstate SC's terrain and weather patterns. We focus on creating sustainable, effective drainage systems that harmonize with your landscaping goals, allowing you to enjoy a beautiful, functional outdoor space no matter the weather. Reach out to us to ensure your home is equipped with the proper drainage infrastructure, setting the stage for a successful and enduring landscape project.",
      },
    ],
  },
  "hardscape-contractor-greenville": {
    title: "How to Choose a Hardscape Contractor in Greenville, SC: 10 Questions to Ask",
    category: "Hardscaping",
    heroImage: hardscapeContractorHero,
    detailImage: hardscapeContractorDetail,
    seoTitle: "How to Choose a Hardscape Contractor in Greenville SC | Elevation Landscapes",
    seoDescription: "Ten essential questions to ask before hiring a hardscape contractor in Greenville, SC. Ensure quality, transparency, and lasting results for your outdoor project.",
    sections: [
      {
        body: "Finding the right hardscape contractor in Greenville, SC, is crucial for ensuring your outdoor project not only meets your expectations but also adds significant value to your property. At Elevation Landscapes, we understand that the decision can be daunting, especially when trust and expertise are at stake. To make the selection process easier and more efficient, we've compiled a list of ten essential questions to ask potential contractors. These questions will help you assess their qualifications, gauge compatibility, and ensure a successful collaboration.",
      },
      {
        heading: "1. What Experience Do You Have in Hardscaping?",
        body: "Experience is a significant factor when choosing a contractor. Inquire about the contractor's years in business and specific experience in hardscaping. A well-seasoned team will not only possess the necessary skills but will also have a portfolio of completed projects in Greenville that showcase their craftsmanship.",
      },
      {
        heading: "2. Can You Provide References or Reviews?",
        body: "Reputable contractors will have a list of satisfied clients willing to vouch for their services. Requesting references allows you to see how past projects have stood the test of time and understand customer satisfaction levels. Online reviews on platforms like Google and Yelp are additional resources that can provide insights into the contractor's reputation.",
      },
      {
        heading: "3. Are You Licensed and Insured?",
        body: "Licensing and insurance are non-negotiable when selecting a hardscape contractor. Ensure that your chosen professional is licensed to operate in South Carolina and carries adequate insurance coverage. This protects you from potential liabilities and ensures compliance with local regulations.",
      },
      {
        heading: "4. What Is Your Design Process?",
        body: "Understanding the design process is crucial for a successful project. Ask the contractor how they plan to bring your vision to life and how involved you'll be in the design stages. Contractors like Elevation Landscapes prioritize client input and use advanced technology to create accurate 3D renderings before the commencement of construction.",
      },
      {
        heading: "5. Can You Show Me Examples of Similar Projects?",
        body: "Seeing is believing. Request to view similar projects that match your vision. This not only gives you a clear idea of their style and quality of work but also provides inspiration and confidence in their ability to deliver.",
      },
      {
        heading: "6. What Is Your Estimated Project Timeline?",
        body: "Timeframes are an essential consideration in any construction project. Discuss the estimated timeline for completion and ask about potential delays. Contractors with efficient operations will provide reasonable timelines and communicate clearly about any unforeseen circumstances that might affect the schedule.",
      },
      {
        heading: "7. How Do You Handle Permits and Regulations?",
        body: "Construction often requires permits and adherence to local building codes. Ask whether the contractor will manage these aspects and ensure that all relevant permits are secured before work begins. Handling regulations efficiently is a mark of professionalism and can prevent project delays.",
      },
      {
        heading: "8. What Materials Do You Recommend and Why?",
        body: "The materials used in your hardscape have a significant impact on durability and aesthetics. A knowledgeable contractor will guide you through the selection of high-quality materials and explain their choices based on climate considerations and usage requirements in Greenville.",
      },
      {
        heading: "9. How Do You Structure Your Pricing?",
        body: "Understanding the pricing structure is crucial for managing your budget effectively. Ask for detailed estimates that break down costs for materials, labor, and any additional services. Transparent pricing allows you to plan financially and minimizes unexpected expenses.",
      },
      {
        heading: "10. What Is Your Warranty and Maintenance Policy?",
        body: "Finally, inquire about the warranty and post-project support. Reliable contractors stand behind their work and offer warranties on both materials and craftsmanship. Additionally, they should provide maintenance tips or services to ensure your hardscape maintains its beauty and functionality over time.",
      },
      {
        body: "Choosing the right hardscape contractor requires thorough vetting. By asking these ten questions, you're not just selecting a contractor but a partner who understands your vision and is committed to excellence. At Elevation Landscapes, we pride ourselves on our ability to deliver exceptional results that transform outdoor spaces into stunning works of art. Contact us today to discuss your hardscape project and see how we can elevate your landscape.",
      },
    ],
  },
  "plant-directory-greenville": {
    title: "Transform Your Greenville Landscape with Our Comprehensive Plant & Tree Directory",
    category: "Plant Guide",
    heroImage: plantDirectoryHero,
    detailImage: plantDirectoryDetail,
    seoTitle: "Plant & Tree Directory for Greenville SC | Elevation Landscapes",
    seoDescription: "Discover our 250-plant directory tailored for Upstate SC's USDA zones 7a-7b. Filter by sun, water, soil, and native status to plan your perfect Greenville landscape.",
    sections: [
      {
        body: "If you're a homeowner in Greenville, SC, you know that choosing the right plants and trees for your yard isn't just about aesthetics—it's about selecting species that will thrive in the unique climate of Upstate South Carolina. With hot summers, occasional freezes, and clay-rich soils, plant selection can be daunting. Make an uninformed choice, and you might face disappointing growth, increased maintenance, or even tree loss. That's where Elevation Landscapes steps in with an innovative solution designed to take the guesswork out of landscape planning.",
      },
      {
        heading: "Introducing the Essential Plant & Tree Directory for Upstate SC Homeowners",
        body: "Our 250-plant and tree directory is not just a list; it's a meticulously curated guide tailored for Greenville's specific growing conditions. While general plant directories offer broad advice, our directory narrows it down to what truly works in Upstate SC's USDA zone 7a-7b, helping you make informed choices that yield stunning, enduring results. Whether you are starting fresh or enhancing your existing landscape, utilizing our directory is your first step toward a healthier, more beautiful yard.",
      },
      {
        heading: "Key Features of Our Directory",
        body: "Maintenance Requirements: Understand the watering, pruning, pest management, and fertilization needs of each plant to ensure long-term health.\n\nLighting Needs: Choose the right species for your yard's sunlight conditions—full sun, partial shade, or full shade—maximizing growth and minimizing stress.\n\nSize and Growth Patterns: Predict mature heights and spreads, avoiding future issues like overcrowding or root interference.\n\nSeasonal Interest: Plan for year-round beauty with plants that offer spring blooms, summer foliage, fall color, or winter interest.\n\nRegional Adaptation: Our directory focuses on native and locally adapted species that are resilient to regional pests and the ever-changing climate, from clay-friendly shrubs to drought-tolerant trees.",
      },
      {
        heading: "How to Leverage Our Plant Directory for Perfect Yard Planning",
        body: "Measure Your Site: Start by understanding your space—note different sunlight exposures and measure areas for planting.\n\nShortlist Your Favorites: With our directory, filter plants by key requirements—like soil compatibility and growth habits—that match your yard's environment.\n\nVisualize Your Landscape: Use the directory's detailed descriptions to conceptualize how plants interact with each other seasonally, ensuring layered and textured appeal.\n\nPlan Your Installation: Once your selection is finalized, create a layout that considers spacing for full growth, and align trees strategically for shade, screening, or aesthetic purposes.",
      },
      {
        heading: "Success Story: Achieving a Dream Yard in Greenville",
        body: "Consider a Greenville homeowner who wanted a lush backyard retreat with minimal maintenance. Using our directory, they selected deer-resistant native serviceberries and shade-loving ferns for their north-facing garden. Elevation Landscapes ensured proper soil amendments and spacing during installation, which resulted in a thriving landscape that required 30% less water and maintenance. This transformation not only enhanced their property's curb appeal but also increased its value—demonstrating the collaborative power of our directory with professional installation.",
      },
      {
        heading: "The Professional Edge: Why Installation by Experts Matters",
        body: "Even with a well-thought-out plan, professional installation is crucial. Our team at Elevation Landscapes brings expertise in:\n\nCorrect Soil Preparation: Ensuring optimal nutrient availability and drainage for robust plant growth.\n\nAccurate Spacing: Avoiding future complications from overcrowding and ensuring adequate sunlight exposure.\n\nAfter-Care Guidance: Providing you with tailored advice on maintaining your new plants and trees, ensuring your landscape remains vibrant and healthy.\n\nWith our proven track record as a leading landscape construction company in Greenville, SC, we guarantee that your vision is realized to the fullest.",
      },
      {
        heading: "Unlock Your Dream Yard Today",
        body: "Don't wait until next season to start your landscape transformation. Browse our free plant and tree directory now to begin crafting your perfect Greenville landscape.",
      },
    ],
  },
};

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articles[slug] : undefined;

  if (!article) return <Navigate to="/articles" replace />;

  const insertImageAfter = 3;

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.seoDescription,
    image: article.heroImage,
    author: {
      "@type": "Organization",
      name: "Elevation Landscapes",
      url: "https://elevationlandscapes.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Elevation Landscapes",
      url: "https://elevationlandscapes.com",
    },
    mainEntityOfPage: `https://elevationlandscapes.com/articles/${slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://elevationlandscapes.com" },
      { "@type": "ListItem", position: 2, name: "Articles", item: "https://elevationlandscapes.com/articles" },
      { "@type": "ListItem", position: 3, name: article.title, item: `https://elevationlandscapes.com/articles/${slug}` },
    ],
  };

  return (
    <>
      <SEOHead
        page={`article-${slug}`}
        fallbackTitle={article.seoTitle}
        fallbackDescription={article.seoDescription}
        path={`/articles/${slug}`}
        jsonLd={[blogPostingJsonLd, breadcrumbJsonLd]}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[340px] md:h-[440px] flex items-end">
        <div className="absolute inset-0">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
          <Badge className="bg-gold/15 text-gold border-gold/30 hover:bg-gold/25 text-xs font-sans uppercase tracking-wider mb-4">
            {article.category}
          </Badge>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-secondary-foreground max-w-3xl leading-tight">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-background py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {article.sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="font-serif text-2xl md:text-3xl text-navy mt-10 mb-4">
                  {section.heading}
                </h2>
              )}
              <p className="text-muted-foreground font-sans text-base leading-relaxed mb-6">
                {section.body}
              </p>

              {/* Detail image after designated section */}
              {i === insertImageAfter && (
                <div className="my-10">
                  <img
                    src={article.detailImage}
                    alt={`${article.title} — detail`}
                    className="w-full rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          ))}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16 pt-10 border-t border-gold/10">
            {slug === "plant-directory-greenville" && (
              <Link
                to="/plant-guide"
                className="bg-gold text-navy font-sans text-sm uppercase tracking-wider px-8 py-3 rounded hover:bg-gold-hover hover:scale-105 hover:shadow-lg transition-all duration-200"
              >
                Browse Our Directory
              </Link>
            )}
            <Link
              to="/contact"
              className={`font-sans text-sm uppercase tracking-wider px-8 py-3 rounded transition-all duration-200 hover:scale-105 hover:shadow-lg ${
                slug === "plant-directory-greenville"
                  ? "border border-gold text-gold hover:bg-gold hover:text-navy"
                  : "bg-gold text-navy hover:bg-gold-hover"
              }`}
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:+18641234567"
              className="flex items-center gap-2 border border-gold text-gold font-sans text-sm uppercase tracking-wider px-8 py-3 rounded hover:bg-gold hover:text-navy transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ArticlePage;
