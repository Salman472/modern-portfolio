interface Props {
  title: string;
  subtitle: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <div className="text-center mb-12 md:mb-16">
    <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-3">
      {title.split(" ").map((word, i, arr) =>
        i === arr.length - 1 ? (
          <span key={i} className="gradient-text"> {word}</span>
        ) : (
          <span key={i}>{word} </span>
        )
      )}
    </h2>
    <p className="text-muted-foreground max-w-md mx-auto">{subtitle}</p>
  </div>
);

export default SectionHeading;
