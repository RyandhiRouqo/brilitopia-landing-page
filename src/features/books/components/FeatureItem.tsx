interface FeatureItemProps {
  text: string;
}

export function FeatureItem({ text }: FeatureItemProps) {
  return (
    <div className="inline-block">
      <span className="text-lg md:text-xl font-bold text-gray-900">
        {text}
      </span>
    </div>
  );
}