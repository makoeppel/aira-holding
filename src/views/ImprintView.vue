<template>
	<v-container class="text-center">
		<v-lazy
			class="height-screen"
			:options="{'threshold':0.5}"
			min-height="100vh">
			<v-row class="height-screen">
				<v-col cols="12">
					<h1>{{ $t("imprint.title") }}</h1>
				</v-col>
				<v-col cols="12">
					<v-row justify="center">
						<h2>{{ $t("imprint.address.title") }}</h2>
					</v-row>
					<v-row>
						<v-col cols="12">
							<p>AIRA Holding GmbH</p>
						</v-col>
						<v-col cols="12">
							<p>Hindenburgstraße 14</p>
						</v-col>
						<v-col cols="12">
							<p>77830 Bühlertal</p>
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="12">
					<v-row justify="center">
						<h2>{{ $t("imprint.representedBy.title") }}</h2>
					</v-row>
					<v-row>
						<v-col cols="12">
							<p>{{ $t("imprint.representedBy.marius") }}</p>
						</v-col>
						<v-col cols="12">
							<p>{{ $t("imprint.representedBy.tobias") }}</p>
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="12">
					<v-row justify="center">
						<h2>{{ $t("imprint.contact.title") }}</h2>
					</v-row>
					<v-row>
						<v-col cols="12">
							<v-btn
								prepend-icon="mdi-phone"
								variant="text"
								href="tel:+4961315537373">
								+49 (0) 6131 55 373 73
							</v-btn>
							<v-btn
								class="text-none"
								prepend-icon="mdi-email"
								variant="text"
								href="mailto:info@aira-holding.de">
								info@aira-holding.de
							</v-btn>
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="12" v-if="false">
					<h2>Registereintrag</h2>
					<v-container fluid>
						<v-row>
							<v-col cols="12">
								<p>Eintrag im Handelsregister</p>
							</v-col>
							<v-col cols="12">
								<p>Registergericht: Amtsgericht Mannheim</p>
							</v-col>
							<v-col cols="12">
								<p>Registernummer: HRB 747097</p>
							</v-col>
						</v-row>
					</v-container>
				</v-col>
			</v-row>
		</v-lazy>
		<v-lazy
			min-height="50vh"
			:options="{'threshold':0.5}">
			<v-row class="height-screen">
				<v-col cols="12">
					<h2>Haftungsausschluss</h2>
					<v-container fluid class="text-left">
						<v-row>
							<v-col cols="12">
								<h3>Haftung für Inhalte</h3>
							</v-col>
							<v-col cols="12">
								Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12">
								<h3>Haftung für Links</h3>
							</v-col>
							<v-col cols="12">
								Diese Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte kein Einfluss genommen werden kann. Deshalb kann für diese fremden Inhalte auch keine Gewähr übernommen werden. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden derartige Links umgehend von dieser Website auf die rechtsverletzende Site entfernen.
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12">
								<h3>Urheberrecht</h3>
							</v-col>
							<v-col cols="12">
								Die durch die Diensteanbieter, deren Mitarbeiter und beauftragte Dritte erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden derartige Inhalte umgehend entfernen.
							</v-col>
						</v-row>
					</v-container>
				</v-col>
			</v-row>
		</v-lazy>
	</v-container>
</template>
<script setup lang="ts">
	import { VBtn, VLazy } from 'vuetify/lib/components/index.mjs'
</script>