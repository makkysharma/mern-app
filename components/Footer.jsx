import React from 'react'
import { Sparkles, ExternalLink } from 'lucide-react'

const Footer = () => {
  return (
    <>
    <p className="text-xs text-slate-500 flex items-center gap-1">
        Made with <Sparkles className="w-3 h-3 text-violet-400" /> by{" "}
        <a
          className="text-violet-400 hover:text-violet-300 hover:underline inline-flex items-center gap-0.5 transition-colors duration-150"
          href="https://makkysharma.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mayank Sharma
          <ExternalLink className="w-3 h-3" />
        </a>
      </p>
    </>
  )
}

export default Footer
