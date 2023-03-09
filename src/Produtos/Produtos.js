const produtos = [
    {id: 1, category: "masculino", isSale: true, salePrice: 39.90, link: "/produtos/tech-t-shirt", name: "tech-t-shirt", title: 'Tech T-Shirt', price: 49.90, image: 'https://cdn.shopify.com/s/files/1/0526/4123/5093/products/5_56553794-ee2c-4435-8351-de522f009a97_400x.jpg?v=1670014955https://cdn.shopify.com/s/files/1/0526/4123/5093/products/TShirtSport-Branco-4_400x.jpg?v=1672671055', stock: '7'},
    {id: 2, category: "masculino", isSale: false, salePrice: 0,  link: "/produtos/kit-3tech-t-shirt", name: "kit-3tech-t-shirt", title: 'Kit 3 Tech T-Shirt', price: 429.90, image: 'https://cdn.shopify.com/s/files/1/0526/4123/5093/products/Group153_1_400x.png?v=1676578883', stock: '10'},
    {id: 3, category: "masculino", isSale: true, link: "/produtos/cueca-comfort", name:"cueca-comfort", title: 'Cueca Confort', price: 69, image: 'https://cdn.shopify.com/s/files/1/0526/4123/5093/products/11_88d75441-d4bc-40e6-a629-b16b85b171e6_450x.png?v=1665947144', stock: '4'},
    {id: 4, category: "masculino", isSale: false, link: "/produtos/kit-3-cueca-comfort", name: "kit-3-cueca-comfort", title: 'Kit 5 Cuecas Confort', price: 327.90, image: 'https://cdn.shopify.com/s/files/1/0526/4123/5093/products/Group158_400x.png?v=1676578922', stock: '15'},
    {id: 5, category: "masculino", isSale: false, link: "/produtos/cueca-performance", name: "cueca-performance", title: 'Cueca Performance', price: 89, image: 'https://cdn.shopify.com/s/files/1/0526/4123/5093/products/CuecaPerformance_Cinza-02_400x.jpg?v=1676221665', stock: '7'},
    {id: 6, category: "masculino", isSale: true, link: "/produtos/kit-3-cueca-performance", name: "kit-3-cueca-performance", title: 'Kit 5 Cuecas Performance', price: 409.90, image: 'https://cdn.shopify.com/s/files/1/0526/4123/5093/products/Group154_1_400x.png?v=1676578904', stock: '27'},
    {id: 7, category: "masculino", isSale: true, link: "/produtos/tech-t-shirt-gola-v", name: "tech-t-shirt-gola-v", title: 'Tech T-Shirt Gola V', price: 129.90, image: 'https://cdn.shopify.com/s/files/1/0526/4123/5093/products/5_5_400x.jpg?v=1673397124', stock: '6'},
    {id: 8, category: "masculino", isSale: false, link: "/produtos/under-shirt", name: "under-shirt", title: 'Undershirt Anti-Suor', price: 129.90, image: 'https://cdn.shopify.com/s/files/1/0526/4123/5093/products/UndershirtAntiSuor_Bege-05_400x.jpg?v=1646422283', stock: '17'},

    {id: 10, category: "feminino", isSale: true,  link: "/produtos/tech-t-shirt-feminina", name: "tech-t-shirt-feminina", title: 'Tech T-Shirt Feminina', price: 119.90, image: 'https://cdn.shopify.com/s/files/1/0526/4123/5093/products/19_400x.png?v=1670208069', stock: '30'},
    {id: 11, category: "feminino", isSale: false, link: "/produtos/tech-t-shirt-gola-v-feminina", name: "tech-t-shirt-gola-v-feminina", title: 'Tech T-Shirt Gola V Feminina', price: 129.90, image: 'https://cdn.shopify.com/s/files/1/0526/4123/5093/products/23_0421da83-48ee-432c-888f-5b55666dcbd2_400x.png?v=1676060927', stock: '19'},
    {id: 12, category: "feminino", isSalee: true, link: "/produtos/calca-wide-leg", name: "calca-wide-leg", title: 'Calça Wide Leg', price: 379.90, image: 'https://cdn.shopify.com/s/files/1/0526/4123/5093/products/1_f5cacf61-902e-4b54-817c-4507771df4c3_400x.jpg?v=1670018886', stock: '7'},
    {id: 13, category: "feminino", isSale: false, link: "/produtos/wingsuit", name: "wingsuit", title: 'Wing Suit', price: 389.90, image: 'https://cdn.shopify.com/s/files/1/0526/4123/5093/products/6_40dc52a5-5103-4c72-9df4-59534bda40a1_400x.jpg?v=1670171940', stock: '17'},
    {id: 14, category: "feminino", isSale: true, link: "/produtos/calcinha-brief", name: "calcinha-brief", title: 'Calcinha Brief', price: 69.90, image: 'https://cdn.shopify.com/s/files/1/0526/4123/5093/products/CalcinhaBrief_Branca-01_400x.jpg?v=1667494983', stock: '5'},
    {id: 15, category: "feminino", isSale: false, link: "/produtos/calcinha-safe", name: "calcinha-safe", title: 'Calcinha Safe', price: 79.90, image: 'https://cdn.shopify.com/s/files/1/0526/4123/5093/products/CalcinhaSafe_Azul-02_400x.jpg?v=1653419772', stock: '23'},
    {id: 16, category: "feminino", isSale: false, link: "/produtos/high-neck", name: "high-neck", title: 'High Neck', price: 149.90, image: 'https://cdn.shopify.com/s/files/1/0526/4123/5093/products/4_c9665ed8-927f-450b-8b08-6530a3c32eef_400x.jpg?v=1675039453', stock: '7'},
    {id: 17, category: "feminino", isSale: false, link: "/produtos/boxy-croped", name: "boxy-croped", title: 'Boxy Croped', price: 159.90, image: 'https://cdn.shopify.com/s/files/1/0526/4123/5093/products/10_977cddca-61c9-476a-b967-3996cf111c00_400x.jpg?v=1670018772', stock: '12'},
    
    {id: 18, category: "feminino", isSale: true, link: "/produtos/sutia-lounge", name: "sutia-lounge", title: 'Sutia Lounge', price: 149.90, image: 'https://cdn.shopify.com/s/files/1/0526/4123/5093/products/13_042cb431-8f71-40d0-a0b4-1f07df9c5d1b_400x.png?v=1667492725', stock: '7'}


]

export default produtos;