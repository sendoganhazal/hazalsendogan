export interface NavLink {
  name: string;
  url: string;
}

export interface HeaderType {
  title: string;
  navLinks: NavLink[];
}
export interface HeroActions {
  name: string;
  url: string;
  class: string;
}
export interface HomeHeroType {
  heroKicker: string;
  heroRole: string;
  heroLead: string;
  heroActions: HeroActions[];
  noteCol: string[];
}

export interface FindOutTeaser {
  cardActionUrl: string;
  cardEyebrow: string;
  cardTitle: string;
  cardBody: string;
  cardActionsName: string;
}
export interface FindOutMoreType {
    eyebrow: string
    teasers: FindOutTeaser[]
}

export interface PageHeaderType {
  backlink: NavLink;
  eyebrow: string;
  title:string
}

export interface Fact {
  id:number,
  tag: string,
  text: string
}

export interface AboutHeroType {
  text: string[],
  facts: Fact[]
}