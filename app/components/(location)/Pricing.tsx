import React from 'react'
import { ArrowRight } from 'lucide-react'

const Pricing = () => {
  const services = [
    {
      tag: 'Standard Plan',
      title: 'Standard Plan',
      price: '₹7,999',
      time: 'Original ₹10,000 (+18% GST ₹1,440)',
      items: [
        '5 pages Website',
        '1 Year Free Domain Name (.com, .in, .org)',
        '1 Year Free Cloud Hosting',
        'Dynamic Website (Premium Design)',
        'Admin Access',
        'Unlimited Images & Videos Upload',
        'Free SSL Certificates',
        '5 Free Email Id',
        'SEO Friendly Website',
        '100% Responsive Website',
        'Live Chat Integration',
        'Payment Gateway Integration',
   
      ],
      cta: 'Call Now',
      highlight: false,
    },

 
    {
      tag: 'E-Commerce',
      title: 'Premium Design E-commerce Plan',
      price: '₹21,999',
      time: 'Original ₹30,000 (+18% GST ₹3,960)',
      items: [
        '30 pages Website',
        '1 Year Free Domain Name (.com, .in, .org)',
        '1 Year Free Cloud Hosting',
        '20 Product Categories & 30 Product Listings',
        'Premium Design & Dynamic Website',
        'Admin Access & Google Search Console Setup',
        'Unlimited Uploads, SSL & 10 Free Emails',
        'Premium Theme, SEO Friendly & Responsive',
        'Live Chat, Payment Gateway & Social Media',
        'Call & WhatsApp Button Integration',
        'Inquiry Form & E-commerce Features',
        'Product Variation Features',
        'Auto Invoice Bill Generator & Wallet System',
        'Order Notification & OTP Verification',
        '1 Year Free Technical Support',
        'Annual Renewal For Hosting ₹4,500',
      ],
      cta: 'Call Now',
      highlight: true,
    },
       {
      tag: 'Tailored',
      title: 'Custom Plan',
      price: 'Custom',
      time: '+ 18% GST Applicable',
      items: [
        'Pages: According to Requirement',
        '1 Year Free Domain Name (.com, .in, .org)',
        '1 Year Free Cloud Hosting',
        'Dynamic Website & Admin Access',
        'Google Search Console Setup',
        'Unlimited Images & Videos Upload',
        'Free SSL Certificates & 10 Free Email Id',
        'SEO Friendly & 100% Responsive Website',
        'Live Chat & Payment Gateway Integration',
        'Social Media, Call & WhatsApp Buttons',
        'Inquiry Form & WooCommerce Features',
        '1 Year Free Technical Support',
        'Annual Renewal For Hosting ₹4,500',
      ],
      cta: 'Call Now',
      highlight: false,
    },
  ];

  return (
    <section className="transition-colors py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className='py-4 mb-9 '>

 
        <p className='text-center py-4 font-bold text-2xl'>Plans & Pricing</p>

        <p className='text-center py-3'>We are among India’s best web solution companies committed to offering full ROI-driven customized web services at affordable prices. Due to its excellent e-commerce website and graphics designs, Flown Developer is one of the top web development companies in India.</p>
               </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((serv, index) => (
            <div
              key={index}
              className={`flex-1 rounded-2xl p-8 border flex flex-col transition-all ${
                serv.highlight
                  ? 'border-blue-500/40 bg-gradient-to-b from-[#1a2454] to-[#0b0f2e] text-white shadow-2xl shadow-blue-900/30 md:-translate-y-3'
                  : 'bg-white dark:bg-[#131826] border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100'
              }`}
            >
              {/* Tag */}
              <p
                className={`text-sm font-medium mb-6 font-inter ${
                  serv.highlight ? 'text-blue-300' : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                {serv.tag}
              </p>

              {/* Title */}
              <h3 className={`text-lg font-semibold mb-1 font-jakarta ${serv.highlight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                {serv.title}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-2 mt-4">
                <span className={`text-3xl font-extrabold font-jakarta ${serv.highlight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                  {serv.price}
                </span>
              </div>
              <p className={`text-sm mb-6 font-inter ${serv.highlight ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>{serv.time}</p>

              <hr className={`mb-6 ${serv.highlight ? 'border-slate-700/60' : 'border-slate-200 dark:border-slate-800'}`} />

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {serv.items.map((item, i) => (
                  <li
                    key={i}
                    className={`text-sm font-inter ${
                      serv.highlight ? 'text-slate-200' : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full flex items-center justify-between rounded-full px-5 py-3 text-sm font-medium transition-colors font-inter ${
                  serv.highlight
                    ? 'bg-white text-black hover:bg-slate-100'
                    : 'bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700'
                }`}
              >
                {serv.cta}
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>



       
      </div>
    </section>
  )
}

export default Pricing