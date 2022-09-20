export const menu = [
	{
		drinks: [
			{
				coffee: [
					{
						id: 1,
						name: 'Coffee of the Day',
						description: 'Light, dark or decaf',
						pricing: [
							{
								size: '12oz',
								price: '2.50',
							},
							{
								size: '16oz',
								price: '2.80',
							},
						],
					},
					{
						id: 2,
						name: 'Shot in the Dark',
						description: 'Coffee and a shot of espresso',
						pricing: [
							{
								size: '12oz',
								price: '3.25',
							},
							{
								size: '16oz',
								price: '3.70',
							},
						],
					},
					{
						id: 3,
						name: 'Cafe Au Lait',
						description: 'Coffee and milk foam',
						pricing: [
							{
								size: '12oz',
								price: '3.35',
							},
							{
								size: '16oz',
								price: '3.80',
							},
						],
					},
				],
				specials: [
					{
						id: 1,
						name: 'Mocha',
						description: 'Latte with chocolate and whipped cream',
						pricing: [
							{
								size: '12oz',
								price: '5.15',
							},
							{
								size: '16oz',
								price: '5.55',
							},
						],
					},
					{
						id: 2,
						name: 'White Mocha',
						description: 'Latte with white chocolate and whipped cream',
						pricing: [
							{
								size: '12oz',
								price: '5.30',
							},
							{
								size: '16oz',
								price: '5.60',
							},
						],
					},
					{
						id: 3,
						name: 'Mexican Mocha',
						description:
							'Latte with chocolate, cinnamon, raw sugar and whipped cream',
						pricing: [
							{
								size: '12oz',
								price: '5.30',
							},
							{
								size: '16oz',
								price: '5.60',
							},
						],
					},
					{
						id: 4,
						name: 'Caramel Latte',
						description: 'Latte with caramel sauce and whipped cream',
						pricing: [
							{
								size: '12oz',
								price: '5.30',
							},
							{
								size: '16oz',
								price: '5.85',
							},
						],
					},
					{
						id: 5,
						name: 'Vienna',
						description: 'Latte with honey and cinnamon',
						pricing: [
							{
								size: '12oz',
								price: '3.50',
							},
							{
								size: '16oz',
								price: '5.60',
							},
						],
					},
					{
						id: 6,
						name: 'Sharbidar',
						description: 'Earl Grey tea with vanilla or honey and milk froth',
						pricing: [
							{
								size: '12oz',
								price: '3.25',
							},
							{
								size: '16oz',
								price: '4.00',
							},
						],
					},
				],
				icedDrinks: [
					{
						id: 1,
						name: 'Cold Press',
						description: 'Smooth, dark, cold',
						pricing: [
							{
								size: '16oz',
								price: '4.00',
							},
						],
					},
					{
						id: 2,
						name: 'Iced tea',
						description:
							'Black (Amore Gold), Green (Green Mandarine), Herbal (Red Berries)',
						pricing: [
							{
								size: '16oz',
								price: '2.90',
							},
						],
					},
					{
						id: 3,
						name: 'Iced Chai Latte',
						description: 'Sweet or Spicy',
						pricing: [
							{
								size: '16oz',
								price: '5.30',
							},
						],
					},
					{
						id: 4,
						name: 'Lemonade',
						description: 'Fresh Squeezed',
						pricing: [
							{
								size: '16oz',
								price: '4.10',
							},
						],
					},
					{
						id: 5,
						name: 'Italian Soda',
						description: 'Sparkling water and choice of flavor',
						pricing: [
							{
								size: '8oz',
								price: '4.15',
							},
						],
					},
					{
						id: 1,
						name: 'Orange Juice',
						description: 'Earl Grey tea with vanilla or honey and milk froth',
						pricing: [
							{
								size: '16oz',
								price: '4.00',
							},
						],
					},
				],
				espresso: [
					{
						id: 1,
						name: 'Espresso',
						description: 'Double shot',
						pricing: [
							{
								size: '8oz',
								price: '2.55',
							},
						],
					},
					{
						id: 2,
						name: 'Macchiato',
						description: 'Traditional Italian',
						pricing: [
							{
								size: '8oz',
								price: '3.15',
							},
						],
					},
					{
						id: 3,
						name: 'Cappuccino',
						description: 'Espresso with milk foam',
						pricing: [
							{
								size: '8oz',
								price: '4.30',
							},
							{
								size: '12oz',
								price: '5.15',
							},
						],
					},
					{
						id: 4,
						name: 'Latte',
						description: 'Espresso and milk froth',
						pricing: [
							{
								size: '12oz',
								price: '4.30',
							},
							{
								size: '16oz',
								price: '5.20',
							},
						],
					},
					{
						id: 5,
						name: 'Breve',
						description: 'Espress and half and half froth',
						pricing: [
							{
								size: '12oz',
								price: '5.05',
							},
							{
								size: '16oz',
								price: '5.60',
							},
						],
					},
					{
						id: 6,
						name: 'Americano',
						description: 'Espresso and hot water',
						pricing: [
							{
								size: '12oz',
								price: '2.90',
							},
							{
								size: '16oz',
								price: '3.70',
							},
						],
					},
				],
				hotDrinks: [
					{
						teas: [
							{
								blackTea: [
									{
										brand: 'Moon over Madagascar',
										description: 'Blend with bourbon vanilla from Madagascar',
										pricing: [
											{
												size: '16oz',
												price: '3.35',
											},
										],
									},
									{
										brand: 'English Breakfast',
										description: 'Full-bodied and rich',
										pricing: [
											{
												size: '16oz',
												price: '3.35',
											},
										],
									},
									{
										brand: 'Earl Grey',
										description: 'Full-bodied with floral and bergamot notes',
										pricing: [
											{
												size: '16oz',
												price: '3.35',
											},
										],
									},
								],
								greenTea: [
									{
										brand: 'Green Mandarine',
										description: 'Mandarine and safflower notes',
										pricing: [
											{
												size: '16oz',
												price: '3.35',
											},
										],
									},
									{
										brand: 'Green Mango',
										description: 'Dried mango and sunflower blossoms',
										pricing: [
											{
												size: '16oz',
												price: '3.35',
											},
										],
									},
									{
										brand: 'Jasmine',
										description: 'Light and floral with Jasmine blossoms',
										pricing: [
											{
												size: '16oz',
												price: '3.35',
											},
										],
									},
									{
										brand: 'Moroccan Mint',
										description: 'Spearmint blend',
										pricing: [
											{
												size: '16oz',
												price: '3.35',
											},
										],
									},
									{
										brand: 'Clouds and Mist',
										description: 'Light with a hint of toastiness',
										pricing: [
											{
												size: '16oz',
												price: '3.35',
											},
										],
									},
								],
								herbal: [
									{
										brand: 'Evening in Missoula',
										description:
											'Chamomile, rosehips, elderberry, peppermint, star anise',
										pricing: [
											{
												size: '16oz',
												price: '3.35',
											},
										],
									},
									{
										brand: 'Peach Paradise',
										description: 'Dried peach, apple and passionfruit',
										pricing: [
											{
												size: '16oz',
												price: '3.35',
											},
										],
									},
									{
										brand: 'Red Berries',
										description:
											'Apples, elderberries, rosehip, raspberries, blackberries, hibiscus',
										pricing: [
											{
												size: '16oz',
												price: '3.35',
											},
										],
									},
									{
										brand: 'Montana Gold',
										description: 'Cinnamon, orange peel, and clove',
										pricing: [
											{
												size: '16oz',
												price: '3.35',
											},
										],
									},
								],
							},
							{
								other: [
									{
										name: 'Matcha Latte',
										description:
											'Matcha tea with honey or vanilla and milk froth',
										pricing: [
											{
												size: '16oz',
												price: '5.60',
											},
										],
									},
									{
										name: 'Chai Latte',
										description: 'Skim milk, black tea, spices and honey',
										pricing: [
											{
												size: '12oz',
												price: '4.75',
											},
											{
												size: '16oz',
												price: '5.60',
											},
										],
									},
									{
										name: 'Hot Chocolate',
										description:
											'Steamed Milk with white or milk chocolate and whipped cream',
										pricing: [
											{
												size: '12oz',
												price: '3.90',
											},
											{
												size: '16oz',
												price: '4.30',
											},
										],
									},
									{
										name: 'Kids Hot Chocolate',
										description: 'Less hot with sprinkles!',
										pricing: [
											{
												size: '12oz',
												price: '3.90',
											},
										],
									},

									{
										name: 'Steamer',
										description: 'Steamed milk and a flavor shot',
										pricing: [
											{
												size: '12oz',
												price: '5.60',
											},
											{
												size: '16oz',
												price: '5.60',
											},
										],
									},
								],
							},
						],
					},
				],
			},
		],
	},
	// {
	// 	food: [
	// 		{
	// 			breakfast: [{}],
	// 			soupsAndSalads: [{}],
	// 			combos: [{}],
	// 			sandwiches: [{}],
	// 			snacks: [{}],
	// 			bakery: [{}],
	// 			glutenFreeBakery: [{}],
	// 		},
	// 	],
	// },
];
