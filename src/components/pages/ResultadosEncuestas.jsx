import { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const COLORS = ['#E63946', '#F1FAEE', '#A8DADC', '#457B9D', '#1D3557']

const data = [
  { name: 'Problemas con la toma de decisiones', value: 35 },
  { name: 'Desperdicio de materia prima', value: 25 },
  { name: 'Falta de estadísticas claras', value: 20 },
  { name: 'Sobrecarga en días festivos', value: 15 },
  { name: 'Otros', value: 5 }
]

export default function ResultadosEncuestas() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary">Validación de Problemas</h1>
          <span className="text-md font-medium text-gray-600">mIA Cucina</span>
        </div>
      </header>

      <main className="px-6 py-12 max-w-7xl mx-auto">
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">¿Qué descubrimos en las entrevistas?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Realizamos más de 20 entrevistas a dueños de restaurantes, chefs y encargados de cocina. Los resultados revelan una serie de problemas que se repiten constantemente y que necesitan una solución urgente.
          </p>
          <div className="bg-white shadow-md rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Problemas identificados:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Decisiones tomadas sin datos concretos</li>
                <li>Gran cantidad de desperdicio por falta de previsión</li>
                <li>No se registran estadísticas de platos ni preferencias</li>
                <li>Saturación de pedidos en fechas especiales</li>
              </ul>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestra propuesta</h2>
          <p className="text-lg text-gray-700 mb-6">
            Estamos desarrollando un sistema inteligente que analiza ventas pasadas, predice la demanda y mejora el control de insumos y producción. El objetivo: maximizar las ganancias y reducir desperdicios.
          </p>

          <div className="bg-primary text-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">¿Querés ver cómo resolvemos esto?</h3>
            <p className="mb-4">
              En pocos clics, vas a poder conocer la solución que diseñamos para optimizar la operación gastronómica.
            </p>
            <a href="/demo" className="bg-white text-primary font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition">
              Ver demo
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t mt-10 py-6 text-center text-gray-600 text-sm">
        mIA Cucina © {new Date().getFullYear()} — Validación de Problemas
      </footer>
    </div>
  )
}
