import wallcrawler from "./assets/pngegg.png";
import brian from "./assets/brian.png"
import neo from "./assets/neo.png"
import tom from "./assets/tom.png"
import link from "./assets/link.png"

import uniqid from "uniqid";

export const characters = [
  { id: uniqid(), name: "Spider-man", url: wallcrawler, found: false },
  { id: uniqid(), name: "Brian", url: brian, found: false },
  { id: uniqid(), name: "Link", url: link,  found: false },
  { id: uniqid(), name: "Tom", url: tom ,found: false },
  { id: uniqid(), name:"Neo" , url: neo ,found:  false},
];
