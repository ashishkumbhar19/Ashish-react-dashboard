export const tocurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
}).format;