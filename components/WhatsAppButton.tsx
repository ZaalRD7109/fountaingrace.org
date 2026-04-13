export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/27752592555"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Fountain of Grace International on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 bg-[#25d366] rounded-full shadow-lg hover:bg-[#1ebe5d] transition-colors duration-200 group"
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="w-8 h-8 fill-white"
        aria-hidden="true"
      >
        <path d="M24 4C12.95 4 4 12.95 4 24c0 3.66.98 7.09 2.69 10.05L4 44l10.21-2.67A19.9 19.9 0 0 0 24 44c11.05 0 20-8.95 20-20S35.05 4 24 4zm0 36c-3.28 0-6.34-.9-8.96-2.47l-.64-.38-6.06 1.59 1.61-5.9-.42-.67A15.93 15.93 0 0 1 8 24c0-8.82 7.18-16 16-16s16 7.18 16 16-7.18 16-16 16zm8.77-11.9c-.48-.24-2.83-1.4-3.27-1.56-.44-.16-.76-.24-1.08.24-.32.48-1.24 1.56-1.52 1.88-.28.32-.56.36-1.04.12-.48-.24-2.02-.74-3.84-2.36-1.42-1.26-2.38-2.82-2.66-3.3-.28-.48-.03-.74.21-.98.22-.22.48-.56.72-.84.24-.28.32-.48.48-.8.16-.32.08-.6-.04-.84-.12-.24-1.08-2.6-1.48-3.56-.38-.92-.78-.8-1.08-.82-.28-.02-.6-.02-.92-.02s-.84.12-1.28.6c-.44.48-1.68 1.64-1.68 4s1.72 4.64 1.96 4.96c.24.32 3.38 5.16 8.2 7.24 1.15.5 2.04.8 2.74 1.02 1.15.36 2.2.31 3.03.19.92-.14 2.83-1.16 3.23-2.28.4-1.12.4-2.08.28-2.28-.12-.2-.44-.32-.92-.56z" />
      </svg>
      {/* Tooltip */}
      <span className="absolute right-16 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </a>
  )
}
