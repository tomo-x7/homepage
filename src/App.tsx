import style from "./app.module.css"

export function App() {
	return (
		<div className={style.container}>
			<header className={style.header}>
				<h1>tomo-x's homepage</h1>
			</header>
			<main className={style.main}>
				<section className={style.linksSection}>
					<h2>Links</h2>
					<div className={style.linksGrid}>
						<a
							href="https://bsky.app/profile/did:plc:qcwvyds5tixmcwkwrg3hxgxd"
							target="_blank"
							rel="noreferrer noopener"
							className={style.linkItem}
						>
							Bluesky
						</a>
						<a href="https://github.com/tomo-x7/" className={style.linkItem}>
							Github
						</a>
					</div>
				</section>

				<section className={style.productsSection}>
					<h2>Products</h2>
					<div className={style.productsGrid}>
						<a href="https://github.com/tomo-x7/JetstreamProxy" className={style.productCard}>
							<div className={style.productTitle}>JetstreamProxy</div>
							<div className={style.productDesc}>Jetstreamを中継することで帯域幅の消費を削減するツール</div>
						</a>
						<a href="https://polaris-consts.pages.dev/" className={style.productCard}>
							<div className={style.productTitle}>ポラリスコード定数表</div>
							<div className={style.productDesc}>ポラリスコードの譜面定数表<br />GASを利用してスプレッドシート経由でデータを集計</div>
						</a>
						<a href="https://githubsky.tomo-x.win" className={style.productCard}>
							<div className={style.productTitle}>GitHubSky</div>
							<div className={style.productDesc}>前日のGitHubのコミット数・獲得スター数を自動投稿</div>
						</a>
					</div>
				</section>
			</main>
		</div>
	);
}
