import wallcrawler from "./assets/pngegg.png";
import brian from "./assets/brian.png"
import neo from "./assets/neo.png"
import tom from "./assets/tom.png"
import link from "./assets/link.png"

import uniqid from "uniqid";

export const characters = [
  { id: uniqid(), name: "Spider-man", url: wallcrawler, found: false, relX: 0.6464, relY: 0.5563 },
  { id: uniqid(), name: "Brian", url: brian, found: false, relX: 0.14, relY: 0.723},
  { id: uniqid(), name: "Link", url: link, found: false, relX: 0.23, relY: 0.6134 },
  { id: uniqid(), name: "Tom", url: tom, found: false, relX: 0.86, relY: 0.656 },
  { id: uniqid(), name: "Neo", url: neo, found: false, relX: 0.41, relY: 0.22 },
];
