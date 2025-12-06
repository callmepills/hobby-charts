type Brand = {
    sportId: string;
    year: number;
    name: string;
    manufacturer?: string;
}

declare module "*.brands.json" {
  const value: Brand[];
  export default value;
}