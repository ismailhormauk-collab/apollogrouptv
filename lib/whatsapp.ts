// Single source of truth for the WhatsApp number used across the site.
// Update WHATSAPP_NUMBER here to change every WhatsApp link at once.
export const WHATSAPP_NUMBER = "34613836698";
// Human-readable form for on-page display (e.g. contact cards).
export const WHATSAPP_DISPLAY = "+34 613 836 698";

/**
 * Builds a wa.me link. Pass a message to pre-fill the chat, or omit it
 * to open a completely empty conversation.
 */
export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
