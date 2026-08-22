export type Principle = {
  title: string;
  body: string;
  index: string;
};

export const principles: Principle[] = [
  {
    index: "01",
    title: "Quality over quantity",
    body: "One well-built product outperforms a hundred half-finished ones. I'd rather maintain fewer things deeply than ship many things shallowly.",
  },
  {
    index: "02",
    title: "Build products that solve problems",
    body: "Technology is a means, not an end. Every tool I build starts from a real problem — mine, or someone else's — and earns its existence by solving it.",
  },
  {
    index: "03",
    title: "Learning never stops",
    body: "The moment you stop learning, you start repeating. I treat every project as a classroom and every readme as a lesson plan.",
  },
];
