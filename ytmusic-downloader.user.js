// ==UserScript==
// @name        YouTube Music Downloader – MP3 (Song, Playlist, Album) - YTgogo
// @name:zh-CN YouTube Music 下载器 – 歌曲 / 播放列表 / 专辑 - YTgogo
// @name:zh-TW YouTube Music 下載器 – 歌曲 / 播放清單 / 專輯 - YTgogo
// @name:ar أداة تنزيل YouTube Music – MP3 (أغنية، قائمة تشغيل، ألبوم) - YTgogo
// @name:bg YouTube Music Downloader – MP3 (песен, плейлист, албум) - YTgogo
// @name:cs Stahovač YouTube Music – MP3 (skladba, playlist, album) - YTgogo
// @name:da YouTube Music Downloader – MP3 (sang, playliste, album) - YTgogo
// @name:de YouTube Music Downloader – MP3 (Song, Playlist, Album) - YTgogo
// @name:el Λήψη YouTube Music – MP3 (τραγούδι, λίστα, άλμπουμ) - YTgogo
// @name:en YouTube Music Downloader – MP3 (Song, Playlist, Album) - YTgogo
// @name:eo YouTube Music-elŝutilo – MP3 (kanto, ludlisto, albumo) - YTgogo
// @name:es Descargador de YouTube Music – MP3 (Canción, Lista, Álbum) - YTgogo
// @name:es-419 Descargador de YouTube Music – MP3 (Canción, Lista, Álbum) - YTgogo
// @name:fi YouTube Music -lataaja – MP3 (kappale, soittolista, albumi) - YTgogo
// @name:fr Téléchargeur YouTube Music – MP3 (Titre, Playlist, Album) - YTgogo
// @name:fr-CA Téléchargeur YouTube Music – MP3 (Titre, Playlist, Album) - YTgogo
// @name:he מוריד YouTube Music – MP3 (שיר, פלייליסט, אלבום) - YTgogo
// @name:hr Preuzimač YouTube Music – MP3 (pjesma, playlist, album) - YTgogo
// @name:hu YouTube Music letöltő – MP3 (dal, lejátszási lista, album) - YTgogo
// @name:id Pengunduh YouTube Music – MP3 (Lagu, Playlist, Album) - YTgogo
// @name:it Downloader YouTube Music – MP3 (Brano, Playlist, Album) - YTgogo
// @name:ja YouTube Music ダウンローダー – 曲 / プレイリスト / アルバム - YTgogo
// @name:ka YouTube Music ჩამომტვირთავი – MP3 (სიმღერა, პლეილისტი, ალბომი) - YTgogo
// @name:ko YouTube Music 다운로더 – 곡 / 재생목록 / 앨범 - YTgogo
// @name:nb YouTube Music-nedlaster – MP3 (sang, spilleliste, album) - YTgogo
// @name:nl YouTube Music-downloader – MP3 (nummer, afspeellijst, album) - YTgogo
// @name:pl Pobieracz YouTube Music – MP3 (utwór, playlista, album) - YTgogo
// @name:pt-BR Downloader do YouTube Music – MP3 (Música, Playlist, Álbum) - YTgogo
// @name:ro Descărcător YouTube Music – MP3 (melodie, playlist, album) - YTgogo
// @name:ru Загрузчик YouTube Music – MP3 (трек, плейлист, альбом) - YTgogo
// @name:sv YouTube Music-nedladdare – MP3 (låt, spellista, album) - YTgogo
// @name:th ตัวดาวน์โหลด YouTube Music – MP3 (เพลง, เพลย์ลิสต์, อัลบั้ม) - YTgogo
// @name:tr YouTube Music İndirici – MP3 (Şarkı, Çalma Listesi, Albüm) - YTgogo
// @name:uk Завантажувач YouTube Music – MP3 (трек, плейлист, альбом) - YTgogo
// @name:ug YouTube Music چۈشۈرگۈچ – MP3 (ناخشا، قويۇش تىزىملىكى، ئالبوم) - YTgogo
// @name:vi Trình tải YouTube Music – MP3 (bài hát, playlist, album) - YTgogo
// @description        Download YouTube Music tracks, playlists, and albums for free. No ads, no registration required, and regularly maintained and updated for a reliable experience. Use it with confidence.
// @description:zh-CN  免费下载 YouTube Music 歌曲、播放列表和专辑。无广告、无需注册，并持续维护更新，使用更放心。
// @description:zh-TW  免費下載 YouTube Music 歌曲、播放清單與專輯。無廣告、無需註冊，並持續維護更新，使用更放心。
// @description:de     Laden Sie YouTube-Music-Titel, Playlists und Alben kostenlos herunter. Keine Werbung, keine Registrierung erforderlich, regelmäßig gepflegt und aktualisiert für ein zuverlässiges Erlebnis.
// @description:en     Download YouTube Music tracks, playlists, and albums for free. No ads, no registration required, and regularly maintained and updated for a reliable experience. Use it with confidence.
// @description:es     Descarga pistas, listas de reproducción y álbumes de YouTube Music gratis. Sin anuncios, sin registro, y mantenido y actualizado regularmente para una experiencia fiable.
// @description:fr     Téléchargez gratuitement des titres, playlists et albums YouTube Music. Sans publicité, sans inscription, régulièrement maintenu et mis à jour pour une expérience fiable.
// @description:ja     YouTube Music の曲、プレイリスト、アルバムを無料でダウンロード。広告なし、登録不要で、定期的にメンテナンスと更新を行い、安心して使えます。
// @description:ko     YouTube Music 트랙, 재생목록, 앨범을 무료로 다운로드하세요. 광고 없음, 가입 불필요, 안정적인 사용을 위해 꾸준히 유지 관리되고 업데이트됩니다.
// @description:ru     Скачивайте треки, плейлисты и альбомы YouTube Music бесплатно. Без рекламы, без регистрации, с регулярной поддержкой и обновлениями для надёжной работы.
// @namespace YoutubeMusicDownloader_Dorian
// @version   1.1.0
// @author    Dorian
// @icon      https://www.google.com/s2/favicons?sz=64&domain=music.youtube.com
// @include   https://music.youtube.com/*
// @noframes
// @license   MIT
// @run-at    document-idle
// @grant     GM_xmlhttpRequest
// @grant     GM.xmlHttpRequest
// @grant     GM_addStyle
// @connect   music.youtube.com
// @connect   youtube.com
// @connect   googlevideo.com
// @connect   *.googlevideo.com
// ==/UserScript==
(function () {
	'use strict';

	/*! Copyright (c) 2026, Dorian. MIT License. */

	const BTN = 'ytm-gogo-download-btn';
	const ROW_BTN = 'ytm-gogo-row-download';
	const PLAYER_BTN = 'ytm-gogo-player-download';
	const ROW_SEL = 'ytmusic-responsive-list-item-renderer, ytmusic-player-queue-item';
	const ID_RE = /(?:[?&]v=|\/watch\/|\/vi\/)([A-Za-z0-9_-]{11})/;
	const STRICT = /^[A-Za-z0-9_-]{11}$/;
	const CHUNK = 5 * 1024 * 1024;
	const CLIENTS = [
		{ clientName: 'ANDROID', clientVersion: '19.44.38', androidSdkVersion: 34, osName: 'Android', osVersion: '14', ua: 'com.google.android.youtube/19.44.38 (Linux; U; Android 14) gzip', nameId: 3 },
		{ clientName: 'IOS', clientVersion: '19.45.4', deviceMake: 'Apple', deviceModel: 'iPhone16,2', osName: 'iPhone', osVersion: '18.1.0.22B83', ua: 'com.google.ios.youtube/19.45.4 (iPhone16,2; U; CPU iOS 18_1_0 like Mac OS X;)', nameId: 5 }
	];

	const xhr = (opts) => new Promise((resolve, reject) => {
		const fn = typeof GM_xmlhttpRequest === 'function' ? GM_xmlhttpRequest
			: (typeof GM !== 'undefined' && GM.xmlHttpRequest);
		if (!fn) { reject(new Error('GM_xmlhttpRequest unavailable')); return; }
		fn({
			...opts,
			onload: (r) => (r.status >= 200 && r.status < 300 ? resolve(r) : reject(new Error('HTTP ' + r.status))),
			onerror: () => reject(new Error('Network error')),
			ontimeout: () => reject(new Error('Timeout'))
		});
	});

	const Toast = {
		el: null,
		show(text, ms) {
			if (!this.el) {
				this.el = document.createElement('div');
				this.el.className = 'ytm-gogo-toast';
				document.body.appendChild(this.el);
			}
			this.el.textContent = text;
			this.el.style.display = 'block';
			clearTimeout(this.t);
			if (ms) { this.t = setTimeout(() => { this.el.style.display = 'none'; }, ms); }
		}
	};

	const Downloader = {
		safeName(s) {
			return String(s || 'track').replace(/[\\/:*?"<>|\u0000-\u001f]/g, '_').replace(/\s+/g, ' ').trim().slice(0, 150) || 'track';
		},
		async fetchPlayer(videoId, client) {
			const body = {
				videoId,
				contentCheckOk: true,
				racyCheckOk: true,
				context: { client: { hl: 'en', gl: 'US', clientName: client.clientName, clientVersion: client.clientVersion,
					androidSdkVersion: client.androidSdkVersion, deviceMake: client.deviceMake, deviceModel: client.deviceModel,
					osName: client.osName, osVersion: client.osVersion } }
			};
			const r = await xhr({
				method: 'POST',
				url: 'https://music.youtube.com/youtubei/v1/player?prettyPrint=false',
				headers: { 'Content-Type': 'application/json', 'User-Agent': client.ua, 'X-YouTube-Client-Name': String(client.nameId), 'X-YouTube-Client-Version': client.clientVersion },
				data: JSON.stringify(body),
				responseType: 'text'
			});
			return JSON.parse(r.responseText);
		},
		pickAudio(info) {
			const formats = (info?.streamingData?.adaptiveFormats || [])
				.filter((f) => /^audio\//.test(f.mimeType || '') && f.url);
			if (!formats.length) { return null; }
			// Prefer mp4/m4a (widely playable), then highest bitrate.
			formats.sort((a, b) => {
				const am = /mp4/.test(a.mimeType) ? 1 : 0;
				const bm = /mp4/.test(b.mimeType) ? 1 : 0;
				return bm - am || (b.bitrate || 0) - (a.bitrate || 0);
			});
			return formats[0];
		},
		async resolve(videoId) {
			let lastErr = new Error('No downloadable audio stream found');
			for (const client of CLIENTS) {
				try {
					const info = await this.fetchPlayer(videoId, client);
					const fmt = this.pickAudio(info);
					if (fmt) { return { info, fmt, client }; }
					lastErr = new Error(info?.playabilityStatus?.reason || lastErr.message);
				} catch (e) { lastErr = e; }
			}
			throw lastErr;
		},
		async fetchBytes(fmt, client, onProgress) {
			const total = Number(fmt.contentLength) || 0;
			const parts = [];
			let got = 0;
			if (!total) {
				const r = await xhr({ method: 'GET', url: fmt.url, headers: { 'User-Agent': client.ua }, responseType: 'arraybuffer' });
				return [r.response];
			}
			while (got < total) {
				const end = Math.min(got + CHUNK, total) - 1;
				const r = await xhr({
					method: 'GET',
					url: fmt.url + '&range=' + got + '-' + end,
					headers: { 'User-Agent': client.ua, Range: 'bytes=' + got + '-' + end },
					responseType: 'arraybuffer'
				});
				const buf = r.response;
				if (!buf || !buf.byteLength) { throw new Error('Empty chunk'); }
				parts.push(buf);
				got += buf.byteLength;
				onProgress(Math.min(100, Math.round((got / total) * 100)));
			}
			return parts;
		},
		save(parts, filename, mime) {
			const url = URL.createObjectURL(new Blob(parts, { type: mime }));
			const a = document.createElement('a');
			a.href = url;
			a.download = filename;
			document.body.appendChild(a);
			a.click();
			a.remove();
			setTimeout(() => URL.revokeObjectURL(url), 60000);
		},
		async download(videoId, hintTitle) {
			if (!videoId) { return; }
			if (this.busy) { Toast.show('A download is already in progress…', 2500); return; }
			this.busy = true;
			try {
				Toast.show('Preparing download…');
				const { info, fmt, client } = await this.resolve(videoId);
				const d = info.videoDetails || {};
				const title = this.safeName((d.author ? d.author + ' - ' : '') + (d.title || hintTitle || videoId));
				const ext = /mp4/.test(fmt.mimeType) ? 'm4a' : 'webm';
				const mime = (fmt.mimeType || 'audio/' + ext).split(';')[0];
				const parts = await this.fetchBytes(fmt, client, (p) => Toast.show('Downloading… ' + p + '%'));
				this.save(parts, title + '.' + ext, mime);
				Toast.show('Saved: ' + title + '.' + ext, 4000);
			} catch (e) {
				console.error('[YTgogo]', e);
				Toast.show('Download failed: ' + (e && e.message || e), 6000);
			} finally {
				this.busy = false;
			}
		}
	};

	const CommonUtils = {
		addStyle(css) {
			if (typeof GM_addStyle === 'function') { GM_addStyle(css); return; }
			const s = document.createElement('style');
			s.textContent = css;
			(document.head || document.documentElement).appendChild(s);
		},
		createDownloadSvg(size = 22) {
			const ns = 'http://www.w3.org/2000/svg';
			const svg = document.createElementNS(ns, 'svg');
			svg.setAttribute('class', 'icon');
			svg.setAttribute('viewBox', '0 0 1024 1024');
			svg.setAttribute('width', String(size));
			svg.setAttribute('height', String(size));
			svg.setAttribute('aria-hidden', 'true');
			const path = document.createElementNS(ns, 'path');
			path.setAttribute('d', 'M483.328 746.837333a44.032 44.032 0 0 0 63.488 0l254.634667-256.682666a45.056 45.056 0 1 0-63.488-63.488l-187.050667 185.344V182.272c0-27.306667-12.970667-45.738667-38.912-45.738667a43.008 43.008 0 0 0-45.397333 45.397334v429.738666L283.306667 426.325333a55.978667 55.978667 0 0 0-63.488 9.216 44.032 44.032 0 0 0 0 63.488z m359.424 68.266667H181.248c-27.306667 0-45.397333 7.509333-45.397333 34.133333s18.090667 40.618667 45.397333 40.618667h661.504c27.306667 0 45.397333-13.312 45.397333-40.618667s-18.090667-33.792-45.397333-33.792z');
			path.setAttribute('fill', 'currentColor');
			svg.appendChild(path);
			return svg;
		}
	};

	const App = {
		_styled: false, _raf: 0, _timer: null, _hovered: null,
		parseVideoId(v) {
			if (!v || typeof v !== 'string') { return ''; }
			const t = v.trim();
			if (STRICT.test(t)) { return t; }
			const m = t.match(ID_RE);
			return m ? m[1] : '';
		},
		label() { return String(navigator.language || '').toLowerCase().startsWith('zh') ? '下载' : 'Download'; },
		isQueue(row) { return row?.localName === 'ytmusic-player-queue-item'; },
		readObjId(v, depth = 0, seen = new WeakSet()) {
			if (!v || depth > 6) { return ''; }
			if (typeof v === 'string') { return this.parseVideoId(v); }
			if (typeof v !== 'object' || v.nodeType || seen.has(v)) { return ''; }
			seen.add(v);
			const direct = [v.videoId, v.playlistItemData?.videoId, v.navigationEndpoint?.watchEndpoint?.videoId,
				v.watchEndpoint?.videoId, v.playNavigationEndpoint?.watchEndpoint?.videoId,
				v.defaultNavigationEndpoint?.watchEndpoint?.videoId,
				v.overlay?.musicItemThumbnailOverlayRenderer?.content?.musicPlayButtonRenderer?.playNavigationEndpoint?.watchEndpoint?.videoId];
			for (const c of direct) { const id = this.parseVideoId(String(c || '')); if (id) { return id; } }
			if (Array.isArray(v.flexColumns)) {
				for (const col of v.flexColumns) {
					const runs = col?.musicResponsiveListItemFlexColumnRenderer?.text?.runs || [];
					for (const run of runs) { const id = this.readObjId(run?.navigationEndpoint, depth + 1, seen); if (id) { return id; } }
				}
			}
			for (const k of ['playlistItemData', 'playlistPanelVideoRenderer', 'navigationEndpoint', 'watchEndpoint', 'overlay', 'musicPlayButtonRenderer', 'playNavigationEndpoint', 'onTap']) {
				if (v[k]) { const id = this.readObjId(v[k], depth + 1, seen); if (id) { return id; } }
			}
			return '';
		},
		readPolymerId(el) {
			if (!el) { return ''; }
			const id = this.parseVideoId(String(el.videoId || el.playlistItemData?.videoId || ''));
			if (id) { return id; }
			return this.readObjId(el.data || el.__data || el.polymerController?.data || el.__dataHost?.data || null);
		},
		currentVideoId() {
			try {
				for (const n of [document.querySelector('ytmusic-player-bar'), document.querySelector('ytmusic-app'), document.querySelector('#movie_player')]) {
					const api = typeof n?.getVideoData === 'function' ? n : (n?.playerApi || n?.playerApi_);
					const id = this.parseVideoId(api?.getVideoData?.()?.video_id || '');
					if (id) { return id; }
				}
			} catch (e) { /* ignore */ }
			const fromBar = this.readPolymerId(document.querySelector('ytmusic-player-bar'));
			if (fromBar) { return fromBar; }
			const fromUrl = this.parseVideoId(new URLSearchParams(location.search).get('v') || '');
			if (fromUrl) { return fromUrl; }
			const link = document.querySelector('ytmusic-player-bar a[href*="watch?v="]');
			return link ? this.parseVideoId(link.getAttribute('href') || '') : '';
		},
		rowVideoId(row) {
			if (!row) { return ''; }
			for (const a of row.querySelectorAll('a[href]')) {
				const id = this.parseVideoId(a.getAttribute('href') || '');
				if (id) { return id; }
			}
			const id = this.readPolymerId(row) || this.readPolymerId(row.querySelector('ytmusic-play-button-renderer'));
			if (id) { return id; }
			for (const img of row.querySelectorAll('img[src]')) {
				const t = this.parseVideoId(img.getAttribute('src') || '');
				if (t) { return t; }
			}
			if (this.isQueue(row) && (row.hasAttribute('selected') || row.getAttribute('play-button-state') === 'playing')) {
				return this.currentVideoId();
			}
			return '';
		},
		createButton(size, extra) {
			const b = document.createElement('button');
			b.type = 'button';
			b.className = extra ? BTN + ' ' + extra : BTN;
			b.setAttribute('aria-label', this.label());
			b.setAttribute('title', this.label());
			b.appendChild(CommonUtils.createDownloadSvg(size));
			return b;
		},
		injectStyles() {
			if (this._styled) { return; }
			this._styled = true;
			CommonUtils.addStyle(`
			.${BTN}{display:inline-flex !important;align-items:center;justify-content:center;flex:0 0 auto;width:40px;height:40px;margin:0 2px;padding:0;border:none;border-radius:50%;background:transparent;color:var(--ytmusic-color-text-secondary,#aaa);cursor:pointer;vertical-align:middle;position:relative;z-index:6}
			.${BTN}:hover,.${BTN}:focus-visible{color:var(--ytmusic-color-text,#fff);background:rgba(255,255,255,.08);outline:none}
			.${BTN} svg{pointer-events:none;display:block}
			ytmusic-player-bar #${PLAYER_BTN}{opacity:1 !important;visibility:visible !important;pointer-events:auto !important}
			.${ROW_BTN}{width:0 !important;height:36px;margin:0 !important;opacity:0 !important;visibility:hidden !important;pointer-events:none !important;overflow:hidden;transition:opacity .12s ease}
			ytmusic-responsive-list-item-renderer:hover .${ROW_BTN},ytmusic-player-queue-item:hover .${ROW_BTN},ytmusic-responsive-list-item-renderer:focus-within .${ROW_BTN},ytmusic-player-queue-item:focus-within .${ROW_BTN},ytmusic-responsive-list-item-renderer.ytm-gogo-hovered .${ROW_BTN},ytmusic-player-queue-item.ytm-gogo-hovered .${ROW_BTN}{width:36px !important;margin:0 4px 0 0 !important;opacity:1 !important;visibility:visible !important;pointer-events:auto !important}
			ytmusic-player-queue-item .song-info{display:flex;align-items:center;min-width:0}
			ytmusic-player-queue-item .song-info>.${ROW_BTN}{margin-left:auto}
			.ytm-gogo-toast{display:none;position:fixed;left:50%;bottom:90px;transform:translateX(-50%);max-width:80vw;padding:10px 18px;border-radius:8px;background:rgba(33,33,33,.95);color:#fff;font:14px Roboto,Arial,sans-serif;z-index:2147483647;pointer-events:none}
			`);
		},
		isOurs(n) {
			return !!n && n.nodeType === 1 && (n.classList.contains(BTN) || n.classList.contains(ROW_BTN) || !!n.closest?.('.' + BTN));
		},
		place(node, parent, before) {
			if (!parent) { return; }
			if (before && before.parentElement === parent) {
				if (node.nextSibling !== before || node.parentElement !== parent) { parent.insertBefore(node, before); }
			} else if (node.parentElement !== parent || parent.lastElementChild !== node) {
				parent.appendChild(node);
			}
		},
		injectPlayer() {
			const bar = document.querySelector('ytmusic-player-bar');
			if (!bar) { return; }
			let parent = null; let before = null;
			const like = bar.querySelector('ytmusic-like-button-renderer, #like-button-renderer');
			if (like?.parentElement) {
				parent = like.parentElement;
				before = parent.querySelector('#menu, ytmusic-menu-renderer') || like.nextElementSibling;
			} else {
				parent = bar.querySelector('.middle-controls-buttons') || bar.querySelector('.right-controls-buttons, .right-controls') || bar;
			}
			let b = document.getElementById(PLAYER_BTN);
			if (!b) {
				b = this.createButton(24);
				b.id = PLAYER_BTN;
				b.addEventListener('click', (e) => {
					e.preventDefault(); e.stopPropagation();
					Downloader.download(this.currentVideoId());
				});
			}
			b.classList.add('style-scope');
			this.place(b, parent, before);
		},
		isTrackRow(row) {
			if (this.isQueue(row)) { return true; }
			return row?.localName === 'ytmusic-responsive-list-item-renderer' &&
				!!row.querySelector('ytmusic-menu-renderer, #menu, .duration, .fixed-column, ytmusic-play-button-renderer, a[href*="watch?v="]');
		},
		rowMount(row) {
			const menu = row.querySelector(':scope > ytmusic-menu-renderer, :scope > #menu') || row.querySelector('ytmusic-menu-renderer, #menu');
			if (this.isQueue(row) || row.closest('#contents, #automix-contents')) {
				if (menu) { return { parent: menu.parentElement || row, before: menu }; }
			}
			const dur = row.querySelector(':scope > .duration, .fixed-column, .duration');
			if (dur?.parentElement && !this.isOurs(dur)) { return { parent: dur.parentElement, before: dur }; }
			if (this.isQueue(row)) {
				const si = row.querySelector('.song-info');
				if (si) { return { parent: si, before: null }; }
			}
			const fc = row.querySelector('.flex-columns');
			if (fc) { return { parent: fc, before: null }; }
			return { parent: row, before: null };
		},
		bindRow(row) {
			if (!this.isTrackRow(row)) { return; }
			let b = row.querySelector('.' + ROW_BTN);
			if (!b) {
				b = this.createButton(18, ROW_BTN);
				const stop = (e) => { e.preventDefault(); e.stopPropagation(); };
				b.addEventListener('mousedown', stop, true);
				b.addEventListener('click', (e) => {
					stop(e);
					const title = row.querySelector('.title, yt-formatted-string.title')?.textContent?.trim();
					Downloader.download(this.rowVideoId(row), title);
				}, true);
			}
			b.classList.add('style-scope');
			const m = this.rowMount(row);
			this.place(b, m.parent, m.before);
		},
		injectTracklist() {
			const rows = new Set();
			document.querySelectorAll('ytmusic-player-queue-item, ytmusic-responsive-list-item-renderer').forEach((r) => rows.add(r));
			rows.forEach((r) => this.bindRow(r));
		},
		inject() {
			this.injectStyles();
			this.injectPlayer();
			this.injectTracklist();
		},
		scheduleInject() {
			if (this._raf) { return; }
			this._raf = requestAnimationFrame(() => {
				this._raf = 0;
				clearTimeout(this._timer);
				this._timer = setTimeout(() => this.inject(), 48);
			});
		},
		bindHover() {
			const set = (row, on) => row && row.classList.toggle('ytm-gogo-hovered', on);
			document.addEventListener('pointerover', (e) => {
				const row = e.target?.closest?.(ROW_SEL);
				if (!row) { return; }
				if (this._hovered && this._hovered !== row) { set(this._hovered, false); }
				set(row, true);
				this._hovered = row;
			}, true);
			document.addEventListener('pointerout', (e) => {
				const row = e.target?.closest?.(ROW_SEL);
				if (!row) { return; }
				const rel = e.relatedTarget;
				if (rel && (rel === row || row.contains(rel))) { return; }
				set(row, false);
				if (this._hovered === row) { this._hovered = null; }
			}, true);
		},
		bindObservers() {
			const obs = new MutationObserver((muts) => {
				for (const m of muts) {
					for (const n of m.removedNodes) {
						if (this.isOurs(n) || (n.nodeType === 1 && n.querySelector?.('.' + BTN))) { this.scheduleInject(); return; }
					}
					for (const n of m.addedNodes) {
						if (n.nodeType !== 1 || this.isOurs(n)) { continue; }
						if (n.matches?.(ROW_SEL) || n.querySelector?.(ROW_SEL) || n.matches?.('ytmusic-player-bar') || n.querySelector?.('ytmusic-player-bar')) {
							this.scheduleInject(); return;
						}
					}
				}
			});
			if (document.body) { obs.observe(document.body, { childList: true, subtree: true }); }
			['yt-navigate-finish', 'yt-page-data-updated', 'yt-service-request-completed'].forEach((n) => {
				window.addEventListener(n, () => this.scheduleInject());
				document.addEventListener(n, () => this.scheduleInject());
			});
		},
		start() {
			if (!/music\.youtube\.com$/.test(location.hostname)) { return; }
			this.bindHover();
			this.bindObservers();
			this.inject();
			this.scheduleInject();
		}
	};

	App.start();
}());
