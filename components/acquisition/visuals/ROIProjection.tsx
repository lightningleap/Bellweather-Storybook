'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp } from 'lucide-react';

interface ROIProjectionProps {
  investment?: number;
  bookPrice?: number;
  royaltyRate?: number;
  accent?: string;
}

export function ROIProjection({
  investment = 5000,
  bookPrice = 15,
  royaltyRate = 0.50,
  accent = '#FF6321',
}: ROIProjectionProps) {
  const profitPerBook = bookPrice * royaltyRate;

  // Generate projection data for different sales scenarios
  const generateProjection = (salesPerMonth: number) => {
    const data = [];
    let cumulativeProfit = -investment; // Start with negative investment

    for (let month = 0; month <= 12; month++) {
      if (month > 0) {
        cumulativeProfit += salesPerMonth * profitPerBook;
      }

      data.push({
        month: month === 0 ? 'Start' : `Month ${month}`,
        conservative: month === 0 ? -investment : cumulativeProfit * 0.5,
        moderate: cumulativeProfit,
        optimistic: month === 0 ? -investment : cumulativeProfit * 1.5,
      });
    }

    return data;
  };

  const data = generateProjection(50); // Assuming 50 sales per month

  return (
    <Card className="mt-4 mb-2 border-2" style={{ borderColor: `${accent}20` }}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" style={{ color: accent }} />
          Potential Return on Investment
        </CardTitle>
        <CardDescription>
          Based on ${investment.toLocaleString()} investment, ${bookPrice} book price, {(royaltyRate * 100).toFixed(0)}% royalty
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Line Chart */}
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" fontSize={10} angle={-45} textAnchor="end" height={80} />
              <YAxis fontSize={12} tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
              <Tooltip
                formatter={(value) => [`$${Number(value).toLocaleString()}`, '']}
                contentStyle={{ borderRadius: '8px', border: `1px solid ${accent}40` }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="conservative"
                name="Conservative (25 sales/mo)"
                stroke={`${accent}66`}
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="moderate"
                name="Moderate (50 sales/mo)"
                stroke={accent}
                strokeWidth={3}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="optimistic"
                name="Optimistic (75 sales/mo)"
                stroke={`${accent}cc`}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>

          {/* Key Insights */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t">
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Conservative</p>
              <p className="text-lg font-bold" style={{ color: `${accent}66` }}>
                $3.8k
              </p>
              <p className="text-xs text-muted-foreground">Year 1</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Moderate</p>
              <p className="text-lg font-bold" style={{ color: accent }}>
                $7.5k
              </p>
              <p className="text-xs text-muted-foreground">Year 1</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Optimistic</p>
              <p className="text-lg font-bold" style={{ color: `${accent}cc` }}>
                $11.3k
              </p>
              <p className="text-xs text-muted-foreground">Year 1</p>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            Actual earnings vary by marketing effort, genre, and audience engagement. These projections assume consistent monthly sales.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
