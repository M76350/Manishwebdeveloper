import { useEffect } from 'react';

type UsePageSEOOptions = {
  /** Full title for the tab, e.g. "Best Web Developer in Bihar | Manish Kumar" */
  title: string;
  /** Short, unique description for this page */
  description: string;
  /** Optional extra keywords to merge with global keywords */
  keywords?: string[];
};

export const usePageSEO = ({ title, description, keywords }: UsePageSEOOptions) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper to get or create a meta tag
    const getOrCreateMeta = (name: string) => {
      let meta = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      return meta;
    };

    // Update description
    const descriptionMeta = getOrCreateMeta('description');
    descriptionMeta.setAttribute('content', description);

    // Update keywords (append to existing global keywords if present)
    if (keywords && keywords.length > 0) {
      const keywordsMeta = getOrCreateMeta('keywords');
      const existing = keywordsMeta.getAttribute('content') || '';
      const existingParts = existing
        .split(',')
        .map((k) => k.trim())
        .filter(Boolean);

      const allKeywords = Array.from(
        new Set([...existingParts, ...keywords.map((k) => k.trim()).filter(Boolean)])
      );

      keywordsMeta.setAttribute('content', allKeywords.join(', '));
    }
  }, [title, description, JSON.stringify(keywords)]);
};

