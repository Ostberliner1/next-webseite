import Image from "next/image";

function FeatureCard({ title, description }) {
  return (
    <div
      className="
        bg-red-600
        px-10
        py-45
        hover:bg-gradient-to-r from-black via-red-600 to-yellow-500 
        rounded-full
        shadow-md
        hover:shadow-xl
        transition-shadow
        duration-200
        animate-spin
        [animation-duration:5s]
        
        text-center
        
        "
    >




      <h3
        className="
            text-4xl
            font-semibold
            mb-3
            text-yellow-500
            "
      >
        {title}
      </h3>
      <p
        className="
            text-white
            text-3xl
            "
      >
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
