export const paths = {
	home: "/",
	auth: { signIn: "/auth/sign-in", signUp: "/auth/sign-up", resetPassword: "/auth/reset-password" },
	dashboard: {
		overview: "/dashboard",
		transactions: "/dashboard/transactions",
		account: "/dashboard/account",
		categories: "/dashboard/categories",
		categorySplitSettings: "/dashboard/integrations",
		settings: "/dashboard/settings",
	},
	errors: { notFound: "/errors/not-found" },
} as const;
