const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 bg-[#0A0A0F] border-t border-[rgba(255,255,255,0.06)] text-white">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex justify-between items-center">
          <span className="text-[0.8rem] text-[rgba(255,255,255,0.3)]">
            © {year} Jan Jílek
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
