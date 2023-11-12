export function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  if (numItems === 0) {
    return (
      <p className="stats">
        <em>Start adding some item to your packing list 🚀</em>
      </p>
    );
  }

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItems} iems on yor list, and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
