"use client"

import { useState } from "react"
import { Menu, Heart, ShoppingCart, ChevronDown, Plus, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const rechargeOptions = [
  { amount: "2.000", validity: "الصلاحية 7 يوم", days: 7 },
  { amount: "4.000", validity: "الصلاحية 15 يوم", days: 15 },
  { amount: "6.000", validity: "الصلاحية 30 يوم", days: 30 },
  { amount: "12.000", validity: "الصلاحية 90 يوم", days: 90 },
  { amount: "22.000", validity: "الصلاحية 180 يوم", days: 180 },
  { amount: "30.000", validity: "الصلاحية 365 يوم", days: 365 },
]

export default function ZainRechargePage() {
  const [activeTab, setActiveTab] = useState<"recharge" | "bill">("recharge")
  const [phoneNumber, setPhoneNumber] = useState("97777798")
  const [selectedAmount, setSelectedAmount] = useState(rechargeOptions[2])
  const [isAmountDropdownOpen, setIsAmountDropdownOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e1548] via-[#251a5c] to-[#1a1240]" dir="rtl">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 bg-[#1a1240]">
        <div className="flex items-center gap-4">
          <button className="text-white">
            <Menu className="w-6 h-6" />
          </button>
          <button className="text-white">
            <Heart className="w-6 h-6" />
          </button>
          <button className="bg-white rounded-full p-2">
            <ShoppingCart className="w-5 h-5 text-[#1a1240]" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 100 40" className="h-8" fill="white">
            <circle cx="15" cy="20" r="12" strokeWidth="2" stroke="white" fill="none" />
            <circle cx="12" cy="17" r="3" fill="white" />
            <path d="M 18 20 Q 25 15 25 20 Q 25 25 18 20" fill="white" />
            <text x="35" y="28" fontSize="20" fontWeight="bold" fill="white">
              zain
            </text>
          </svg>
        </div>
      </header>

      <div className="px-4 py-8 max-w-2xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold text-white text-center mb-8">الدفع السريع</h1>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Tabs */}
          <div className="grid grid-cols-2 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("bill")}
              className={`py-4 text-center font-medium transition-colors ${
                activeTab === "bill" ? "text-[#d62598] border-b-2 border-[#d62598]" : "text-gray-500"
              }`}
            >
              دفع الفاتورة
            </button>
            <button
              onClick={() => setActiveTab("recharge")}
              className={`py-4 text-center font-medium transition-colors ${
                activeTab === "recharge" ? "text-[#d62598] border-b-2 border-[#d62598]" : "text-gray-500"
              }`}
            >
              <span className="text-[#d62598]">eeZee</span> إعادة تعبئة
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 space-y-6">
            {/* Recharge For */}
            <div>
              <p className="text-gray-700 mb-3 text-right">أود أن أعيد التعبئة ل</p>
              <Select defaultValue="other">
                <SelectTrigger className="w-full bg-white border-0 border-b-2 border-gray-200 rounded-none px-0 text-right">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="other">رقم آخر</SelectItem>
                  <SelectItem value="my">رقمي</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Phone Number */}
            <div>
              <label className="text-sm text-gray-500 mb-2 block text-right">* رقم الهاتف</label>
              <Input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="text-2xl font-semibold text-gray-900 border-0 border-b-2 border-gray-200 rounded-none px-0 text-right"
                dir="ltr"
              />
            </div>

            {/* Amount */}
            <div>
              <label className="text-gray-700 mb-3 block text-right font-medium">مبلغ التعبئة</label>
              <div className="relative">
                <button
                  onClick={() => setIsAmountDropdownOpen(!isAmountDropdownOpen)}
                  className="w-full flex items-center justify-between border-b-2 border-gray-200 pb-2 hover:border-[#d62598] transition-colors"
                >
                  <ChevronDown
                    className={`w-5 h-5 text-[#d62598] transition-transform ${isAmountDropdownOpen ? "rotate-180" : ""}`}
                  />
                  <div className="text-right flex-1">
                    <div className="text-2xl font-semibold text-gray-900">د.ك {selectedAmount.amount}</div>
                    <div className="text-sm text-gray-500 mt-1">{selectedAmount.validity}</div>
                  </div>
                </button>

                {isAmountDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-10 max-h-96 overflow-y-auto">
                    {rechargeOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedAmount(option)
                          setIsAmountDropdownOpen(false)
                        }}
                        className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        {selectedAmount.amount === option.amount && <Check className="w-5 h-5 text-[#d62598]" />}
                        {selectedAmount.amount !== option.amount && <div className="w-5" />}
                        <div className="text-right flex-1">
                          <div className="text-lg font-semibold text-gray-900">د.ك {option.amount}</div>
                          <div className="text-sm text-gray-500">{option.validity}</div>
                        </div>
                      </button>
                    ))}
                    <button
                      onClick={() => {
                        setIsAmountDropdownOpen(false)
                      }}
                      className="w-full px-4 py-4 hover:bg-gray-50 transition-colors text-right"
                    >
                      <div className="text-lg font-semibold text-[#d62598]">مبلغ آخر</div>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Add Another Number Button */}
            <button className="w-full py-4 border-2 border-[#d62598] text-[#d62598] rounded-full font-medium flex items-center justify-center gap-2 hover:bg-pink-50 transition-colors">
              <Plus className="w-5 h-5" />
              أضف رقم آخر
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 mx-6" />

          {/* Total */}
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="text-left">
              <div className="text-3xl font-bold text-[#8bc34a]">د.ك {selectedAmount.amount}</div>
            </div>
            <div className="text-right">
              <div className="text-xl font-semibold text-gray-900">إجمالي</div>
            </div>
          </div>

          {/* Recharge Button */}
          <div className="p-6 pt-0">
            <Button className="w-full bg-[#d62598] hover:bg-[#c01e85] text-white text-lg py-6 rounded-full font-semibold shadow-lg">
              أعد التعبئة الآن
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
