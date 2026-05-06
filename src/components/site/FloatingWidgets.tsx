import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export function FloatingWidgets() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      {/* WhatsApp - left bottom */}
      <a
        href="https://wa.me/2347055551944"
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed left-4 bottom-6 z-40 flex items-center gap-3 bg-[#25D366] text-white rounded-full pl-3 pr-4 py-3 shadow-lg hover:shadow-xl transition-all"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
        <span className="text-sm font-semibold max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[200px] transition-all duration-500">
          Chat on WhatsApp
        </span>
      </a>

      {/* Chat - right bottom */}
      <div className="fixed right-4 bottom-6 z-40">
        {!chatOpen ? (
          <button
            onClick={() => setChatOpen(true)}
            className="relative bg-gradient-primary text-white h-14 w-14 rounded-full flex items-center justify-center shadow-lg pulse-ring"
            aria-label="Open chat"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        ) : (
          <div className="w-80 sm:w-96 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4">
            <div className="bg-gradient-primary text-white px-4 py-3 flex items-center justify-between">
              <div>
                <div className="font-display font-bold text-lg leading-tight">Chat with C.M.M.R</div>
                <div className="text-xs opacity-90 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-white pulse-dot inline-block" /> Usually replies within an hour
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="hover:bg-white/20 rounded p-1">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-4 space-y-3 max-h-72 overflow-y-auto bg-secondary">
              <div className="flex gap-2">
                <div className="h-7 w-7 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xs font-bold">C</div>
                <div className="bg-card rounded-2xl rounded-tl-sm px-3 py-2 text-sm max-w-[80%]">
                  Hello! I'm the C.M.M.R Assistant. How can we support your interest in media & migration research today?
                </div>
              </div>
              <div className="text-[11px] text-text-muted text-center pt-2">
                We're currently offline. Leave your message and we'll get back to you shortly.
              </div>
            </div>
            <form
              className="border-t border-border p-2 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                window.open("https://wa.me/2347055551944", "_blank");
              }}
            >
              <input
                placeholder="Type a message..."
                className="flex-1 bg-transparent px-3 py-2 text-sm focus:outline-none"
              />
              <button className="bg-gradient-primary text-white rounded-full h-9 w-9 flex items-center justify-center" aria-label="Send">
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
