import React from 'react'
import { RichText } from 'prismic-reactjs';

import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const ChartSlice = ({ slice }) => (
  <section>
    <div className="bg-white">
      <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Product */}
        <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          {/* Product image */}
          <div className="lg:row-end-1 lg:col-span-4">
            <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">                  
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={slice.items} nameKey="entityLabel" dataKey="percentageShare" cx="50%" cy="50%" innerRadius={50} outerRadius={90} fill="#5a67d8"
                  label={({
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius,
                    index
                  }) => {
                    const RADIAN = Math.PI / 180;
                    // eslint-disable-next-line
                    const radius = 30 + innerRadius + (outerRadius - innerRadius);
                    // eslint-disable-next-line
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    // eslint-disable-next-line
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);
          
                    return (
                      <text
                        x={x}
                        y={y}
                        fill="#5a67d8"
                        textAnchor={x > cx ? "start" : "end"}
                        dominantBaseline="central"
                      >
                        {slice.items[index].entityLabel} ({slice.items[index].percentageShare}%)
                      </text>
                    );
                  }}
                  >
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Product details */}
          <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"><RichText render={slice.primary.title} /></h1>

                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>
              </div>
            </div>

            <p className="text-gray-500 mt-6"><RichText render={slice.primary.description} /></p>

            <div className="border-t border-gray-200 mt-10 pt-10">
              <h3 className="text-sm font-medium text-gray-900"><RichText render={slice.primary.additionalInfoTitle} /></h3>
              <div className="mt-4 prose prose-sm text-gray-500">
                <RichText render={slice.primary.additionalInfo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ChartSlice

// export default class Example extends PureComponent {

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <PieChart width={400} height={400}>
//           <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
//           <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
//         </PieChart>
//       </ResponsiveContainer>
//     );
//   }
// }
