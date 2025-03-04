"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Users, Clock, Award, Zap } from "lucide-react"

export default function ServerStats() {
  const [onlinePlayers, setOnlinePlayers] = useState(0)
  const maxPlayers = 100

  // Simulate changing online players
  useEffect(() => {
    const interval = setInterval(() => {
      const randomChange = Math.floor(Math.random() * 3) - 1 // -1, 0, or 1
      setOnlinePlayers((prev) => {
        const newValue = prev + randomChange
        return newValue >= 0 && newValue <= maxPlayers ? newValue : prev
      })
    }, 5000)

    // Initial value
    setOnlinePlayers(42)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="bg-black border-orange-800">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-200">Игроки онлайн</h3>
            <Users className="h-5 w-5 text-orange-500" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-2xl font-bold text-white">{onlinePlayers}</span>
              <span className="text-sm text-gray-400">из {maxPlayers}</span>
            </div>
            <Progress value={(onlinePlayers / maxPlayers) * 100} className="h-2 bg-orange-950">
              <div className="h-full bg-orange-500 rounded-full" />
            </Progress>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black border-orange-800">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-200">Время работы</h3>
            <Clock className="h-5 w-5 text-orange-500" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-2xl font-bold text-white">347</span>
              <span className="text-sm text-gray-400">дней</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-orange-950/50 rounded p-1">
                <p className="text-xs text-gray-400">Дней</p>
                <p className="font-bold text-white">347</p>
              </div>
              <div className="bg-orange-950/50 rounded p-1">
                <p className="text-xs text-gray-400">Часов</p>
                <p className="font-bold text-white">14</p>
              </div>
              <div className="bg-orange-950/50 rounded p-1">
                <p className="text-xs text-gray-400">Минут</p>
                <p className="font-bold text-white">23</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black border-orange-800">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-200">Всего игроков</h3>
            <Award className="h-5 w-5 text-orange-500" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-2xl font-bold text-white">1,247</span>
              <span className="text-sm text-gray-400">игроков</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-orange-950/50 rounded p-2 text-center">
                <p className="text-xs text-gray-400">За неделю</p>
                <p className="font-bold text-white">+43</p>
              </div>
              <div className="bg-orange-950/50 rounded p-2 text-center">
                <p className="text-xs text-gray-400">За месяц</p>
                <p className="font-bold text-white">+156</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black border-orange-800">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-200">Производительность</h3>
            <Zap className="h-5 w-5 text-orange-500" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-2xl font-bold text-white">19.8</span>
              <span className="text-sm text-gray-400">TPS</span>
            </div>
            <Progress value={(19.8 / 20) * 100} className="h-2 bg-orange-950">
              <div className="h-full bg-orange-500 rounded-full" />
            </Progress>
            <div className="flex justify-between text-xs text-gray-400">
              <span>Пинг: 24ms</span>
              <span>RAM: 78%</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

