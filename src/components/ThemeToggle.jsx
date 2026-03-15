const ThemeToggle = ({ isDark, onToggle }) => (
  <button
    type="button"
    onClick={onToggle}
    className="w-10 h-10 flex items-center justify-center rounded-full text-gray-500 dark:text-gray-400 hover:text-dark dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
    aria-label={isDark ? 'Přepnout na světlý režim' : 'Přepnout na tmavý režim'}
  >
    {isDark ? (
      <svg className="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5" />
        <path strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ) : (
      <svg className="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    )}
  </button>
)

export default ThemeToggle
