type BunttonType = "primary" | "secondary" | "danger";
type SubBunttonType = Exclude<BunttonType, "danger">; // primary | secondary

const button: SubBunttonType = "secondary";
const button2: SubBunttonType = "primary";
