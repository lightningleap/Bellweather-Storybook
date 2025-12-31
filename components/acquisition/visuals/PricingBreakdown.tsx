'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { DollarSign } from 'lucide-react';

interface PricingBreakdownProps {
  wordCount: number;
  accent?: string;
}

export function PricingBreakdown({ wordCount, accent = '#FF6321' }: PricingBreakdownProps) {
  // Calculate pricing based on word count
  const editingCost = Math.round(wordCount * 0.02); // $0.02/word average
  const coverDesign = 1000;
  const interiorFormat = 300;
  const distribution = 300;
  const marketing = 2000;
  const total = editingCost + coverDesign + interiorFormat + distribution + marketing;

  const data = [
    { name: 'Editing', cost: editingCost, color: accent },
    { name: 'Cover', cost: coverDesign, color: `${accent}cc` },
    { name: 'Interior', cost: interiorFormat, color: `${accent}99` },
    { name: 'Distribution', cost: distribution, color: `${accent}66` },
    { name: 'Marketing', cost: marketing, color: `${accent}33` },
  ];

  return (
    <Card className="mt-4 mb-2 border-2" style={{ borderColor: `${accent}20` }}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5" style={{ color: accent }} />
          Estimated Investment Breakdown
        </CardTitle>
        <CardDescription>
          Based on your {wordCount.toLocaleString()}-word manuscript
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Bar Chart */}
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" fontSize={12} />
              <YAxis fontSize={12} tickFormatter={(value) => `$${value}`} />
              <Tooltip
                formatter={(value) => `$${value}`}
                contentStyle={{ borderRadius: '8px', border: `1px solid ${accent}40` }}
              />
              <Bar dataKey="cost" radius={[8, 8, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          {/* Cost Breakdown List */}
          <div className="space-y-2 pt-4 border-t">
            {data.map((item) => (
              <div key={item.name} className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{item.name}</span>
                <span className="font-semibold">${item.cost.toLocaleString()}</span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-2 border-t-2 text-lg font-bold">
              <span>Total Investment</span>
              <span style={{ color: accent }}>${total.toLocaleString()}</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            This is an estimate for a full-service package. You can choose individual services to fit your budget.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
