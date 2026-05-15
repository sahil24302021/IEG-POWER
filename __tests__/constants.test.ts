/**
 * Constants Data Integrity Tests
 * Ensures all content data is valid and complete.
 */
import {
  BRAND,
  NAV_LINKS,
  WHY_IEG,
  STATS,
  JOURNEY_MILESTONES,
  PRODUCTS_READY,
  SUBSIDIARIES,
  CERTIFICATES,
  TEAM_MEMBERS,
  ROADMAP_STEPS,
  RECOGNITIONS,
  MARKET,
} from '@/lib/constants';

describe('BRAND constants', () => {
  it('has all required brand fields', () => {
    expect(BRAND.name).toBeTruthy();
    expect(BRAND.tagline).toBeTruthy();
    expect(BRAND.email).toContain('@');
    expect(BRAND.hq).toBeTruthy();
  });

  it('has valid patent data', () => {
    expect(BRAND.patent1.number).toBe('391051');
    expect(BRAND.patent2.number).toBe('557845');
    expect(BRAND.patent1.patentee).toBe('Ajay Choudhary');
    expect(BRAND.patent2.patentee).toBe('Ajay Choudhary');
  });
});

describe('NAV_LINKS', () => {
  it('has at least 5 navigation links', () => {
    expect(NAV_LINKS.length).toBeGreaterThanOrEqual(5);
  });

  it('starts with Home route at /', () => {
    expect(NAV_LINKS[0]).toEqual({ name: 'Home', href: '/' });
  });

  it('all links have name and href', () => {
    NAV_LINKS.forEach((link) => {
      expect(link.name).toBeTruthy();
      expect(link.href).toMatch(/^\//);
    });
  });

  it('has no duplicate hrefs', () => {
    const hrefs = NAV_LINKS.map((l) => l.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });
});

describe('WHY_IEG cards', () => {
  it('has exactly 4 cards', () => {
    expect(WHY_IEG).toHaveLength(4);
  });

  it('each card has icon, title, desc', () => {
    WHY_IEG.forEach((card) => {
      expect(card.icon).toBeTruthy();
      expect(card.title).toBeTruthy();
      expect(card.desc).toBeTruthy();
    });
  });
});

describe('STATS', () => {
  it('has 4 stat items', () => {
    expect(STATS).toHaveLength(4);
  });

  it('all values are positive numbers', () => {
    STATS.forEach((s) => {
      expect(s.value).toBeGreaterThan(0);
      expect(typeof s.label).toBe('string');
    });
  });
});

describe('PRODUCTS_READY', () => {
  it('has at least 3 products', () => {
    expect(PRODUCTS_READY.length).toBeGreaterThanOrEqual(3);
  });

  it('each product has required fields', () => {
    PRODUCTS_READY.forEach((p) => {
      expect(p.id).toBeTruthy();
      expect(p.name).toBeTruthy();
      expect(p.category).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(p.image).toMatch(/^\/assets\//);
    });
  });

  it('product images reference .jpg files for compressed assets', () => {
    const largeProducts = PRODUCTS_READY.filter((p) =>
      ['rickshaw', 'battery-charger', 'chula', 'generator'].includes(p.id)
    );
    largeProducts.forEach((p) => {
      expect(p.image).toMatch(/\.jpg$/);
    });
  });
});

describe('SUBSIDIARIES', () => {
  it('has 5 business verticals', () => {
    expect(SUBSIDIARIES).toHaveLength(5);
  });

  it('each subsidiary has products array', () => {
    SUBSIDIARIES.forEach((s) => {
      expect(Array.isArray(s.products)).toBe(true);
      expect(s.products.length).toBeGreaterThan(0);
    });
  });
});

describe('CERTIFICATES', () => {
  it('has at least 4 certificates', () => {
    expect(CERTIFICATES.length).toBeGreaterThanOrEqual(4);
  });

  it('each certificate has image path', () => {
    CERTIFICATES.forEach((c) => {
      expect(c.image).toMatch(/^\/assets\//);
    });
  });
});

describe('TEAM_MEMBERS', () => {
  it('has board of directors', () => {
    expect(TEAM_MEMBERS.length).toBeGreaterThanOrEqual(3);
  });

  it('includes the founder', () => {
    const founder = TEAM_MEMBERS.find((m) => m.name === 'Ajay Choudhary');
    expect(founder).toBeDefined();
    expect(founder?.role).toContain('Director');
  });
});

describe('JOURNEY_MILESTONES', () => {
  it('starts from 1993', () => {
    expect(JOURNEY_MILESTONES[0].year).toBe('1993');
  });

  it('is in chronological order', () => {
    for (let i = 1; i < JOURNEY_MILESTONES.length; i++) {
      expect(parseInt(JOURNEY_MILESTONES[i].year)).toBeGreaterThanOrEqual(
        parseInt(JOURNEY_MILESTONES[i - 1].year)
      );
    }
  });
});

describe('MARKET data', () => {
  it('has valid CAGR percentage', () => {
    expect(MARKET.cagr).toMatch(/%$/);
  });
});

describe('ROADMAP_STEPS', () => {
  it('has at least 4 steps', () => {
    expect(ROADMAP_STEPS.length).toBeGreaterThanOrEqual(4);
  });
});

describe('RECOGNITIONS', () => {
  it('includes Dr. APJ Abdul Kalam', () => {
    const kalam = RECOGNITIONS.find((r) => r.name.includes('Kalam'));
    expect(kalam).toBeDefined();
  });
});
