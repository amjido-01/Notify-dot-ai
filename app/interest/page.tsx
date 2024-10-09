'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { BrainCircuit, Check, Plus } from "lucide-react"

// Pre-defined interests
const predefinedInterests = [
  { id: 'ai', name: 'Artificial Intelligence', icon: '🤖' },
  { id: 'ml', name: 'Machine Learning', icon: '🧠' },
  { id: 'dl', name: 'Deep Learning', icon: '🕸️' },
  { id: 'nlp', name: 'Natural Language Processing', icon: '💬' },
  { id: 'cv', name: 'Computer Vision', icon: '👁️' },
  { id: 'robotics', name: 'Robotics', icon: '🦾' },
  { id: 'ethics', name: 'AI Ethics', icon: '⚖️' },
  { id: 'future', name: 'Future of AI', icon: '🔮' },
  { id: "business", name: "Business", icon: "💼" },
  { id: "healthcare", name: "Healthcare", icon: "🏥" },
  { id: "finance", name: "Finance", icon: "💰" },
  { id: "gaming", name: "Gaming", icon: "🎮" },
  { id: "education", name: "Education", icon: "📚" },
  { id: "entertainment", name: "Entertainment", icon: "🎭" },
  // ... other predefined interests
]

export default function SelectInterests() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [customInterests, setCustomInterests] = useState<{id: string, name: string}[]>([])
  const [newInterest, setNewInterest] = useState('')
  const router = useRouter()

  const toggleInterest = (id: string) => {
    setSelectedInterests(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const addCustomInterest = () => {
    if (newInterest.trim()) {
      const customId = `custom-${Date.now()}`
      setCustomInterests(prev => [...prev, { id: customId, name: newInterest.trim() }])
      setSelectedInterests(prev => [...prev, customId])
      setNewInterest('')
    }
  }

  const handleSubmit = async () => {
    // Here you would typically send the selected interests to your backend
    const allSelectedInterests = [
      ...selectedInterests.filter(id => !id.startsWith('custom-')),
      ...customInterests.filter(interest => selectedInterests.includes(interest.id)).map(interest => interest.name)
    ]
    console.log('Selected interests:', allSelectedInterests)
    // For now, we'll just redirect to the dashboard
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] to-[#1A1A1A] text-white flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl space-y-8"
      >
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="mx-auto w-16 h-16 relative"
          >
            <BrainCircuit className="w-16 h-16 text-[#50E3C2]" />
            <div className="absolute inset-0 bg-[#50E3C2] rounded-full filter blur-xl opacity-50 animate-pulse" />
          </motion.div>
          <h1 className="mt-6 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#50E3C2] to-[#4FACFE]">
            Customize Your AI Pulse
          </h1>
          <p className="mt-2 text-lg text-gray-300">
            Select the AI topics that resonate with you
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {predefinedInterests.map((interest) => (
            <motion.div
              key={interest.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => toggleInterest(interest.id)}
                className={`w-full h-28 rounded-lg p-2 flex flex-col items-center justify-center transition-all duration-300 ${
                  selectedInterests.includes(interest.id)
                    ? 'bg-gradient-to-br from-[#50E3C2] to-[#4FACFE] text-black shadow-lg shadow-[#50E3C2]/50'
                    : 'bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white'
                }`}
              >
                <span className="text-3xl mb-2">{interest.icon}</span>
                <span className="text-xs font-medium text-center leading-tight">
                  {interest.name}
                </span>
                {selectedInterests.includes(interest.id) && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-1 right-1 bg-black rounded-full p-0.5"
                  >
                    <Check className="h-3 w-3" />
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
          {customInterests.map((interest) => (
            <motion.div
              key={interest.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => toggleInterest(interest.id)}
                className={`w-full h-28 rounded-lg p-2 flex flex-col items-center justify-center transition-all duration-300 ${
                  selectedInterests.includes(interest.id)
                    ? 'bg-gradient-to-br from-[#50E3C2] to-[#4FACFE] text-black shadow-lg shadow-[#50E3C2]/50'
                    : 'bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white'
                }`}
              >
                <span className="text-3xl mb-2">🆕</span>
                <span className="text-xs font-medium text-center leading-tight">
                  {interest.name}
                </span>
                {selectedInterests.includes(interest.id) && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-1 right-1 bg-black rounded-full p-0.5"
                  >
                    <Check className="h-3 w-3" />
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
          <Dialog>
            <DialogTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  className="w-full h-28 rounded-lg p-2 flex flex-col items-center justify-center bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white transition-all duration-300"
                >
                  <Plus className="h-8 w-8 mb-2" />
                  <span className="text-xs font-medium">Add Custom Interest</span>
                </button>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-[#1A1A1A] text-white">
              <DialogHeader>
                <DialogTitle>Add Custom Interest</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="flex items-center gap-4">
                  <Input
                    id="custom-interest"
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    className="col-span-3"
                    placeholder="Enter your custom interest"
                  />
                  <Button onClick={addCustomInterest} className="bg-[#50E3C2] hover:bg-[#4FACFE] text-black">
                    Add
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex justify-center">
          <Button
            onClick={handleSubmit}
            disabled={selectedInterests.length === 0}
            className="bg-gradient-to-r from-[#50E3C2] to-[#4FACFE] hover:from-[#4FACFE] hover:to-[#50E3C2] text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {selectedInterests.length === 0 ? 'Select Your Interests' : 'Continue to Dashboard'}
          </Button>
        </div>

        <p className="text-center text-sm text-gray-400">
          You can always update your interests later in your profile settings.
        </p>
      </motion.div>
    </div>
  )
}