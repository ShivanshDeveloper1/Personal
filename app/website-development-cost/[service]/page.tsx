
import Hero from '@/app/components/Hero'
import {services} from '@/data/website-cost/service.js'
import { notFound } from 'next/navigation'

export async function generateMetadata({paramss}){

    const {service} = await params;

    const data = services[service]


    if(!data){
        return notFound()
    }

    return{
        title:`${data.title} in India 2026 | Cost Calculator`,
         description: data.description,
    }
}

export default async function ServiceCostPage({params}){

    const {service} = await params

    const data = services[service]

    if(!data){
        notFound()
    }


    return(
        <>

        <Hero data={data}  />
          {/* <CostCalculator data={data} /> */}

      {/* <PriceBreakdown data={data} /> */}

      {/* <PricingTable data={data} />

      <FeatureAccordion data={data} />

      <CostFactors data={data} />

      <CaseStudies data={data} />

      <FAQ data={data} />

      <CTA data={data} /> */}
        
        
        
        
        </>
    )


}