import { Reveal } from '../components/Reveal';
import { ExternalLink } from 'lucide-react';

const newsItems = [
    {
        id: 1,
        title: "Meishu Biotech: Pioneering Orthopedic Solutions in India",
        summary: "Strategic focus on transforming orthopedic healthcare in India through advanced biotech innovations.",
        date: "Dec 10, 2024",
        url: "https://entrepreneurstreet.in/meishu-biotech-pioneering-orthopedic-solutions-in-india/"
    },
    {
        id: 2,
        title: "Coming Soon: Meishu Biotech's First Patent Applied Product",
        summary: "Exclusive preview of our upcoming breakthrough orthopedic product launch and its patent application journey.",
        date: "Aug 13, 2024",
        url: "https://entrepreneurstreet.in/coming-soon-meishu-biotechs-first-patent-applied-product-in-the-orthopedic-segment/"
    },
    {
        id: 3,
        title: "Meishu Biotech: Pioneering the Future of Pharmaceuticals",
        summary: "Profiling our journey in pioneering the next generation of safe, effective pharmaceutical solutions.",
        date: "July 9, 2024",
        url: "https://www.hindustanmetro.com/meishu-biotech-pioneering-the-future-of-pharmaceuticals/"
    },
    {
        id: 4,
        title: "Meet 12 Dynamic Companies Driving Change & Leading Market Evolution",
        summary: "Recognized as a dynamic force driving market evolution and innovation in the 2024 biotech landscape.",
        date: "May 31, 2024",
        url: "https://www.business-standard.com/content/press-releases-ani/meet-12-dynamic-companies-driving-change-leading-market-evolution-in-2024-124060100009_1.html"
    },
    {
        id: 5,
        title: "Driving Change & Leading Market Evolution",
        summary: "Highlighted for our dynamic role in shaping the modern pharmaceutical market landscape.",
        date: "May 31, 2024",
        url: "https://firstindia.co.in/articles/meet-12-dynamic-companies-driving-change-leading-market-evolution-in-2024"
    },
    {
        id: 6,
        title: "Dynamic Companies Leading Market Evolution",
        summary: "Featured among transformative companies leading the charge in 2024's evolving market.",
        date: "May 31, 2024",
        url: "https://republic-india.com/meet-12-dynamic-companies-driving-change-leading-market-evolution-in-2024/"
    },
    {
        id: 7,
        title: "Meet 12 Dynamic Companies Driving Change",
        summary: "Listed as a key driver of positive change and market evolution in the biotechnology sector.",
        date: "May 31, 2024",
        url: "https://www.lokmattimes.com/business/meet-12-dynamic-companies-driving-change-leading-market-evolution-in-2024/"
    },
    {
        id: 8,
        title: "Meet 12 Dynamic Companies Driving Change",
        summary: "Spotlight on our significant contributions to industry advancement and community welfare.",
        date: "May 31, 2024",
        url: "https://www.sangritoday.com/spotlight/meet-12-dynamic-companies-driving-change-leading-market-evolution-in-2024"
    },
    {
        id: 9,
        title: "Dynamic Companies Driving Change in 2024",
        summary: "Showcasing our leadership and commitment to driving positive change in the 2024 business ecosystem.",
        date: "May 31, 2024",
        url: "https://wowentrepreneurs.in/index.php/2024/05/31/meet-12-dynamic-companies-driving-change-leading-market-evolution-in-2024/"
    },
    {
        id: 10,
        title: "Meishu Biotech: Pioneering the Future of Pharmaceuticals",
        summary: "A deep dive into our commitment to innovation, excellence, and future-ready pharmaceutical development.",
        date: "May 2024",
        url: "https://entrepreneurstreet.in/meishu-biotech-pioneering-the-future-of-pharmaceuticals/"
    },
    {
        id: 11,
        title: "Meishu Biotech: Pioneering Orthopedic Solutions in India",
        summary: "Covering our latest breakthroughs in providing advanced, accessible orthopedic care solutions.",
        date: "May 2024",
        url: "https://thedailybeat.in/meishu-biotech-pioneering-orthopedic-solutions-in-india"
    },
    {
        id: 12,
        title: "Meishu Biotech: Pioneering Orthopedic Solutions",
        summary: "Innovative approaches to solving complex orthopedic challenges: An in-depth feature.",
        date: "May 2024",
        url: "http://thedailybeat.in/meishu-biotech-pioneering-orthopedic-solutions-in-india"
    },
    {
        id: 13,
        title: "10 Companies Making a Difference in Their Communities in 2023",
        summary: "Acknowledging our profound social impact and dedication to community upliftment in 2023.",
        date: "April 20, 2023",
        url: "https://www.business-standard.com/content/press-releases-ani/10-companies-that-are-making-a-difference-in-their-communities-in-2023-123042001032_1.html"
    },
    {
        id: 14,
        title: "10 Companies That Are Making a Difference in 2023",
        summary: "Highlighted among top companies creating tangible positive change in communities nationwide.",
        date: "April 20, 2023",
        url: "https://www.aninews.in/news/business/business/10-companies-that-are-making-a-difference-in-their-communities-in-202320230420181125/"
    }
];

export const News = () => {
    return (
        <div className="bg-gray-50 dark:bg-slate-950 min-h-screen py-20 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <Reveal>
                    <h1 className="text-4xl md:text-5xl font-bold font-display text-biotech-dark dark:text-white mb-10 text-center">Meishu in News</h1>
                </Reveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newsItems.map((item) => (
                        <Reveal key={item.id}>
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-white dark:bg-slate-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-slate-800 hover:border-biotech-accent group h-full flex flex-col"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs font-semibold text-biotech-accent bg-biotech-50 dark:bg-slate-800 px-2 py-1 rounded">{item.date}</span>
                                    <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-biotech-main" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-biotech-main transition-colors">{item.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm flex-grow">{item.summary}</p>
                                <div className="mt-4 text-biotech-main text-sm font-medium">Read Article &rarr;</div>
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    );
};
