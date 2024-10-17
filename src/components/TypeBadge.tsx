
const typeColors: { [key: string]: string } = {
    normal: "bg-gray-400",
    fire: "bg-red-500",
    water: "bg-blue-500",
    electric: "bg-yellow-300",
    grass: "bg-green-400",
    ice: "bg-blue-200",
    fighting: "bg-red-600",
    poison: "bg-purple-500",
    ground: "bg-yellow-700",
    flying: "bg-indigo-300",
    psychic: "bg-pink-500",
    bug: "bg-green-600",
    rock: "bg-gray-600",
    ghost: "bg-purple-700",
    dragon: "bg-indigo-800",
    dark: "bg-gray-800",
    steel: "bg-gray-500",
    fairy: "bg-pink-300",
};


export default function TypeBadge({typeName}: {typeName: string}) {
    

    return (
        <div className={`text-white py1 px-2 rounded capitalize ${typeColors[typeName] || "bg-gray-400"}`}>
            {typeName}
        </div>
    )
}