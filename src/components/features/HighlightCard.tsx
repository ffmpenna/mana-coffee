interface HighlightCardProps {
  readonly name: string;
  readonly description: string;
  readonly image: string;
}

const HighlightCard = ({ name, description, image }: HighlightCardProps) => {
  return (
    <div className="flex-1 group relative overflow-hidden border-b md:border-b-0 md:border-r border-white/10 h-[600px] md:h-[819px]">
      <img
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        src={image}
        alt={name}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
        <h3 className="font-headline font-black text-6xl md:text-7xl text-white text-soft-serve uppercase mb-4 drop-shadow-xl">
          {name}
        </h3>
        <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white/80 max-w-[240px] font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
