const ToolList = ({ tools }) => (
  <div className="text-cta-text flex flex-wrap gap-2">
    {tools.map((tool, i) => (
      <span
        key={i}
        className="text-xs font-normal px-2 py-1 rounded bg-cta-active border hover:bg-card hover:text-copy-primary transition-colors"
      >
        {tool}
      </span>
    ))}
  </div>
);

export default ToolList;