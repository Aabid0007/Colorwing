import BrandingImg1 from '../../assets/Rectangle 19 (1).png'
import BrandingImg2 from '../../assets/Rectangle 22.png'
import BrandingImg3 from '../../assets/Rectangle 20.png'
import BrandingImg4 from '../../assets/Rectangle 21.png'

import Printingimg1 from '../../assets/Rectangle 19 (2).png'
import Printingimg2 from '../../assets/Rectangle 22 (1).png'
import Printingimg3 from '../../assets/Rectangle 20 (1).png'
import Printingimg4 from '../../assets/Rectangle 21 (1).png'

import Signagesimg1 from '../../assets/Rectangle 19 (3).png'
import Signagesimg2 from '../../assets/Rectangle 22 (2).png'
import Signagesimg3 from '../../assets/Rectangle 20 (2).png'
import Signagesimg4 from '../../assets/Rectangle 21 (2).png'

import PromotionalImg1 from '../../assets/Rectangle 31.png'
import PromotionalImg2 from '../../assets/Rectangle 32.png'
import PromotionalImg3 from '../../assets/Rectangle 28.png'
import PromotionalImg4 from '../../assets/Rectangle 21 (4).png'



const serviceDetails = [
    {
        id: '1', heading: 'Branding', description: 'Strengthen your brand identity with our professional branding solutions designed to make a lasting impact. We specialize in company branding to enhance your corporate presence, wall branding to transform spaces into powerful marketing tools, and vehicle branding to turn your fleet into mobile advertisements. With high-quality materials and eye-catching designs, we help businesses stand out and leave a strong impression.',
        images: [
            {
                title: 'Company branding', image: BrandingImg1,
            },
            {
                title: "Wall Branding", image: BrandingImg2,
            },
            {
                title: 'Vehicle branding', image: BrandingImg3,
            },
            {
                title: "Cafes & Shops Sign Boards", image: BrandingImg4
            },
        ],
    },
    {
        id: '2', heading: 'Printing', description: 'In addition to our premium eco-friendly packaging solutions, we offer high-quality printing services for a variety of business essentials. From business cards, letterheads, and envelopes to invoices, vouchers, and brochures, we ensure your brand maintains a professional and cohesive identity. Our expertise extends to flyers, booklets, folders, and stickers, providing impactful marketing materials that leave a lasting impression. We also specialize in computer forms, roll-up banners, pop-up displays, flex printing, and tear-drop flags, perfect for corporate events, retail promotions, and trade shows. With our precision printing and vibrant finishes, your brand will stand out while maintaining a commitment to quality and sustainability.',
        images: [
            {
                title: 'Business cards', image: Printingimg1,
            },
            {
                title: "Flex printing", image: Printingimg2,
            },
            {
                title: 'Stickers', image: Printingimg3,
            },
            {
                title: "Booklets", image: Printingimg4
            },
        ],
    },
    {
        id: '3', heading: 'Signages', description: 'Boost your brand’s visibility with our premium signages, designed for lasting impact. We offer acrylic 3D signs for a sleek look, LED boards and neon signages for vibrant displays, and SS plates for a professional touch. Our safety and traffic signs ensure clear communication and compliance. Built with high-quality materials, our signages are durable, eye-catching, and perfect for any business.',
        images: [
            {
                title: 'Acrylic 3D signs', image: Signagesimg1,
            },
            {
                title: "Neon signages", image: Signagesimg2,
            },
            {
                title: 'LED boards', image: Signagesimg3,
            },
            {
                title: "Safety & Traffic signs", image: Signagesimg4
            },
        ],
    },
    {
        id: '4', heading: 'Promotional Gifts', description: 'Boost your brand visibility with our customized promotional gifts, perfect for corporate giveaways and marketing campaigns. We offer a variety of high-quality items, including diaries, keychains, mugs, pens, USB drives, and bottles, all personalized with your logo. For a more impactful presence, we provide stress balls, T-shirts, caps, coveralls, and safety jackets, ensuring your brand stands out in both professional and casual settings. These practical and stylish gifts make lasting impressions while enhancing brand recognition.',
        images: [
            {
                title: 'BDiary & Pen', image: PromotionalImg1,
            },
            {
                title: "Mug & Bottles", image: PromotionalImg2,
            },
            {
                title: 'T-Shirts & Caps', image: PromotionalImg3,
            },
            {
                title: "Coverall & Safety Jackets", image: PromotionalImg4
            },
        ],
    },

]

export default serviceDetails;