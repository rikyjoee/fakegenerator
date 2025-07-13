import React, { useState } from 'react';

export default function App() {
  const [user, setUser] = useState(null);

  // Data nama dan alamat Indonesia
  const names = ["Budi", "Siti", "Andi", "Rina", "Agus", "Dewi", "Hendra", "Nina"];
  const surnames = ["Putra", "Putri", "Wijaya", "Saputra", "Lesmana"];
  const cities = ["Jakarta", "Bandung", "Surabaya", "Medan", "Semarang"];
  const occupations = ["Programmer", "Guru", "Dokter", "Desainer Grafis"];

  const generateIdentity = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomAge = Math.floor(Math.random() * 60) + 18;
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];

    setUser({
      name: `${randomName} ${randomSurname}`,
      age: randomAge,
      city: randomCity,
      occupation: occupation,
      gender: randomName === "Siti" || randomName === "Rina" ? "Perempuan" : "Laki-laki"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 py-10 px-4">
      <div className="max-w-md mx-auto bg-white shadow-xl rounded-lg p-6 border border-gray-200">
        <h1 className="text-2xl font-bold text-center mb-4">Generator Identitas Palsu</h1>
        <p className="text-center text-gray-600 mb-6">Klik tombol untuk membuat identitas baru.</p>

        <button
          onClick={generateIdentity}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Generate Identitas Baru
        </button>

        {user && (
          <div className="mt-6 space-y-3">
            <p><span className="font-medium">Nama:</span> {user.name}</p>
            <p><span className="font-medium">Jenis Kelamin:</span> {user.gender}</p>
            <p><span className="font-medium">Usia:</span> {user.age}</p>
            <p><span className="font-medium">Kota:</span> {user.city}</p>
            <p><span className="font-medium">Pekerjaan:</span> {user.occupation}</p>
          </div>
        )}
      </div>
    </div>
  );
}
