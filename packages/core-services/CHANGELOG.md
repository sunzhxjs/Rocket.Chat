# @rocket.chat/core-services

## 0.4.1

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.10.1
  - @rocket.chat/rest-typings@6.10.1
  - @rocket.chat/models@0.1.1
  </details>

## 0.4.0

### Minor Changes

- ([#31821](https://github.com/RocketChat/Rocket.Chat/pull/31821)) New runtime for apps in the Apps-Engine based on the Deno platform

### Patch Changes

- <details><summary>Updated dependencies [a565999ae0, 1240c874a5, 5f95c4ec6b, 495628bce0, f75a2cb4bb, 07c4ca0621, 4f72d62aa7, dfa49bdbb2]:</summary>

  - @rocket.chat/ui-kit@0.35.0
  - @rocket.chat/core-typings@6.10.0
  - @rocket.chat/rest-typings@6.10.0
  - @rocket.chat/models@0.1.0
  </details>

## 0.4.0-rc.7

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.10.0-rc.7
  - @rocket.chat/rest-typings@6.10.0-rc.7
  - @rocket.chat/models@0.1.0-rc.7
  </details>

## 0.4.0-rc.6

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.10.0-rc.6
  - @rocket.chat/rest-typings@6.10.0-rc.6
  - @rocket.chat/models@0.1.0-rc.6
  </details>

## 0.4.0-rc.5

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.10.0-rc.5
  - @rocket.chat/rest-typings@6.10.0-rc.5
  - @rocket.chat/models@0.1.0-rc.5
  </details>

## 0.4.0-rc.4

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.10.0-rc.4
  - @rocket.chat/rest-typings@6.10.0-rc.4
  - @rocket.chat/models@0.1.0-rc.4
  </details>

## 0.4.0-rc.3

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.10.0-rc.3
  - @rocket.chat/rest-typings@6.10.0-rc.3
  - @rocket.chat/models@0.1.0-rc.3
  </details>

## 0.4.0-rc.2

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.10.0-rc.2
  - @rocket.chat/rest-typings@6.10.0-rc.2
  - @rocket.chat/models@0.1.0-rc.2
  </details>

## 0.4.0-rc.1

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.10.0-rc.1
  - @rocket.chat/rest-typings@6.10.0-rc.1
  - @rocket.chat/models@0.1.0-rc.1
  </details>

## 0.4.0-rc.0

### Minor Changes

- ([#31821](https://github.com/RocketChat/Rocket.Chat/pull/31821)) New runtime for apps in the Apps-Engine based on the Deno platform

### Patch Changes

- <details><summary>Updated dependencies [a565999ae0, 1240c874a5, 5f95c4ec6b, 495628bce0, f75a2cb4bb, 07c4ca0621, 4f72d62aa7, dfa49bdbb2]:</summary>

  - @rocket.chat/ui-kit@0.35.0-rc.0
  - @rocket.chat/core-typings@6.10.0-rc.0
  - @rocket.chat/rest-typings@6.10.0-rc.0
  - @rocket.chat/models@0.1.0-rc.0

## 0.3.18

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.9.3
  - @rocket.chat/rest-typings@6.9.3
  - @rocket.chat/models@0.0.42
  </details>

## 0.3.17

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.9.2
  - @rocket.chat/rest-typings@6.9.2
  - @rocket.chat/models@0.0.41
  </details>

## 0.3.16

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.9.1
  - @rocket.chat/rest-typings@6.9.1
  - @rocket.chat/models@0.0.40
  </details>

## 0.3.15

### Patch Changes

- ([#32311](https://github.com/RocketChat/Rocket.Chat/pull/32311)) Fixed multiple issues with PDF generation logic when a quoted message was too big to fit in one single page. This was causing an internal infinite loop within the library (as it tried to make it fit, failing and then trying to fit on next page where the same happened thus causing a loop).
  The library was not able to break down some nested views and thus was trying to fit the whole quote on one single page. Logic was updated to allow wrapping of the contents when messages are quoted (so they can span multiple lines) and removed a bunch of unnecesary views from the code.
- ([#32318](https://github.com/RocketChat/Rocket.Chat/pull/32318)) Fixed error handling for files bigger than NATS max allowed payload. This should prevent PDFs from erroring out when generating from rooms that contain heavy images.

- <details><summary>Updated dependencies [ff4e396416, f83bd56cc5, ee5cdfc367, 70ab2a7b7b]:</summary>

  - @rocket.chat/core-typings@6.9.0
  - @rocket.chat/rest-typings@6.9.0
  - @rocket.chat/ui-kit@0.34.0
  - @rocket.chat/models@0.0.39
  </details>

## 0.3.15-rc.2

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.9.0-rc.2
  - @rocket.chat/rest-typings@6.9.0-rc.2
  - @rocket.chat/models@0.0.39-rc.2
  </details>

## 0.3.15-rc.1

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.9.0-rc.1
  - @rocket.chat/rest-typings@6.9.0-rc.1
  - @rocket.chat/models@0.0.39-rc.1
  </details>

## 0.3.15-rc.0

### Patch Changes

- ([#32311](https://github.com/RocketChat/Rocket.Chat/pull/32311)) Fixed multiple issues with PDF generation logic when a quoted message was too big to fit in one single page. This was causing an internal infinite loop within the library (as it tried to make it fit, failing and then trying to fit on next page where the same happened thus causing a loop).
  The library was not able to break down some nested views and thus was trying to fit the whole quote on one single page. Logic was updated to allow wrapping of the contents when messages are quoted (so they can span multiple lines) and removed a bunch of unnecesary views from the code.
- ([#32318](https://github.com/RocketChat/Rocket.Chat/pull/32318)) Fixed error handling for files bigger than NATS max allowed payload. This should prevent PDFs from erroring out when generating from rooms that contain heavy images.

- <details><summary>Updated dependencies [ff4e396416, f83bd56cc5, ee5cdfc367, 70ab2a7b7b]:</summary>

  - @rocket.chat/core-typings@6.9.0-rc.0
  - @rocket.chat/rest-typings@6.9.0-rc.0
  - @rocket.chat/ui-kit@0.34.0-rc.0
  - @rocket.chat/models@0.0.39-rc.0
  </details>

## 0.3.14

### Patch Changes

- ([#32374](https://github.com/RocketChat/Rocket.Chat/pull/32374)) Fixed an issue with some apps that didn't implement executeViewCloseHandler. This causes opened modals to be open forever on UI (unless Esc was clicked). This is because when the UI attempts to close it, it calls the aforementioned handler, and since it didn't exist, apps engine errored out.

  This returned an empty response to the UI, which ignored the response and continued to show the view.

- ([#32230](https://github.com/RocketChat/Rocket.Chat/pull/32230)) Fixed a problem that caused OTR Session messages' to not being transmitted from one peer to another when running Rocket.Chat as microservices. This was caused by a legacy streamer that tried to use the websocket directly, which works on monolith but doesn't on microservices, cause these events are routed through DDP Streamer service.

- <details><summary>Updated dependencies [845fd64f45, c47a8e3514, 9a6a7d0a40, 845fd64f45, b94ca7c30b, 9902554388, 4aba7c8a26]:</summary>

  - @rocket.chat/rest-typings@6.8.0
  - @rocket.chat/core-typings@6.8.0
  - @rocket.chat/models@0.0.38
  - @rocket.chat/message-parser@0.31.29
  - @rocket.chat/ui-kit@0.33.0
  </details>

## 0.3.14-rc.2

### Patch Changes

- ([#32374](https://github.com/RocketChat/Rocket.Chat/pull/32374)) Fixed an issue with some apps that didn't implement executeViewCloseHandler. This causes opened modals to be open forever on UI (unless Esc was clicked). This is because when the UI attempts to close it, it calls the aforementioned handler, and since it didn't exist, apps engine errored out.

  This returned an empty response to the UI, which ignored the response and continued to show the view.

- <details><summary>Updated dependencies [b94ca7c30b]:</summary>

  - @rocket.chat/core-typings@6.8.0-rc.2
  - @rocket.chat/rest-typings@6.8.0-rc.2
  - @rocket.chat/models@0.0.38-rc.2
  </details>

## 0.3.14-rc.1

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.8.0-rc.1
  - @rocket.chat/rest-typings@6.8.0-rc.1
  - @rocket.chat/models@0.0.37-rc.1
  </details>

## 0.3.14-rc.0

### Patch Changes

- ([#32230](https://github.com/RocketChat/Rocket.Chat/pull/32230)) Fixed a problem that caused OTR Session messages' to not being transmitted from one peer to another when running Rocket.Chat as microservices. This was caused by a legacy streamer that tried to use the websocket directly, which works on monolith but doesn't on microservices, cause these events are routed through DDP Streamer service.

- <details><summary>Updated dependencies [845fd64f45, c47a8e3514, 9a6a7d0a40, 845fd64f45, 9902554388, 4aba7c8a26]:</summary>

  - @rocket.chat/rest-typings@6.8.0-rc.0
  - @rocket.chat/core-typings@6.8.0-rc.0
  - @rocket.chat/models@0.0.36-rc.0
  - @rocket.chat/message-parser@0.31.29
  - @rocket.chat/ui-kit@0.33.0

## 0.3.13

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.7.2
  - @rocket.chat/rest-typings@6.7.2
  - @rocket.chat/models@0.0.37
  </details>

## 0.3.12

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.7.1
  - @rocket.chat/rest-typings@6.7.1
  - @rocket.chat/models@0.0.36
  </details>

## 0.3.11

### Patch Changes

- ([#31927](https://github.com/RocketChat/Rocket.Chat/pull/31927)) `stopped` lifecycle method was unexpectedly synchronous when using microservices, causing our code to create race conditions.

- <details><summary>Updated dependencies [b9ef630816, 3eb4dd7f50, d1b1ffe9e5, b9e897a8f5, 5ad65ff3da, e203c40471]:</summary>

  - @rocket.chat/core-typings@6.7.0
  - @rocket.chat/rest-typings@6.7.0
  - @rocket.chat/message-parser@0.31.29
  - @rocket.chat/models@0.0.35
  - @rocket.chat/ui-kit@0.33.0
  </details>

## 0.3.11-rc.4

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.7.0-rc.4
  - @rocket.chat/rest-typings@6.7.0-rc.4
  - @rocket.chat/models@0.0.35-rc.4
  </details>

## 0.3.11-rc.3

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.7.0-rc.3
  - @rocket.chat/rest-typings@6.7.0-rc.3
  - @rocket.chat/models@0.0.35-rc.3
  </details>

## 0.3.11-rc.2

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.7.0-rc.2
  - @rocket.chat/rest-typings@6.7.0-rc.2
  - @rocket.chat/models@0.0.35-rc.2
  </details>

## 0.3.11-rc.1

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.7.0-rc.1
  - @rocket.chat/rest-typings@6.7.0-rc.1
  - @rocket.chat/models@0.0.35-rc.1
  </details>

## 0.3.11-rc.0

### Patch Changes

- ([#31927](https://github.com/RocketChat/Rocket.Chat/pull/31927)) `stopped` lifecycle method was unexpectedly synchronous when using microservices, causing our code to create race conditions.

- <details><summary>Updated dependencies [b9ef630816, 3eb4dd7f50, d1b1ffe9e5, b9e897a8f5, 5ad65ff3da, e203c40471]:</summary>

  - @rocket.chat/core-typings@6.7.0-rc.0
  - @rocket.chat/rest-typings@6.7.0-rc.0
  - @rocket.chat/message-parser@0.31.29-rc.0
  - @rocket.chat/models@0.0.35-rc.0
  - @rocket.chat/ui-kit@0.33.0
  </details>

## 0.3.10

### Patch Changes

- <details><summary>Updated dependencies [ada096901a]:</summary>

  - @rocket.chat/models@0.0.34
  - @rocket.chat/core-typings@6.6.6
  - @rocket.chat/rest-typings@6.6.6
  </details>

## 0.3.9

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.6.5
  - @rocket.chat/rest-typings@6.6.5
  - @rocket.chat/models@0.0.33
  </details>

## 0.3.8

### Patch Changes

- ([#31927](https://github.com/RocketChat/Rocket.Chat/pull/31927)) `stopped` lifecycle method was unexpectedly synchronous when using microservices, causing our code to create race conditions.

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.6.4
  - @rocket.chat/rest-typings@6.6.4
  - @rocket.chat/models@0.0.32
  </details>

## 0.3.7

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.6.3
  - @rocket.chat/rest-typings@6.6.3
  - @rocket.chat/models@0.0.31
  </details>

## 0.3.6

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.6.2
  - @rocket.chat/rest-typings@6.6.2
  - @rocket.chat/models@0.0.30
  </details>

## 0.3.5

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.6.1
  - @rocket.chat/rest-typings@6.6.1
  - @rocket.chat/models@0.0.29
  </details>

## 0.3.4

### Patch Changes

- ([#31138](https://github.com/RocketChat/Rocket.Chat/pull/31138)) feat(uikit): Move `@rocket.chat/ui-kit` package to the main monorepo

- ([#31349](https://github.com/RocketChat/Rocket.Chat/pull/31349) by [@Subhojit-Dey1234](https://github.com/Subhojit-Dey1234)) feat: Implemented InlineCode handling in Bold, Italic and Strike

- ([#31371](https://github.com/RocketChat/Rocket.Chat/pull/31371)) Fixed an issue that caused login buttons to not be reactively removed from the login page when the related authentication service was disabled by an admin.

- <details><summary>Updated dependencies [b223cbde14, dbb08ef948, 748e57984d, 7c6198f49f, fdd9852079, 2260c04ec6, b4b2cd20a8]:</summary>

  - @rocket.chat/ui-kit@0.33.0
  - @rocket.chat/core-typings@6.6.0
  - @rocket.chat/rest-typings@6.6.0
  - @rocket.chat/models@0.0.28
  </details>

## 0.3.4-rc.7

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.6.0-rc.7
  - @rocket.chat/rest-typings@6.6.0-rc.7
  - @rocket.chat/models@0.0.28-rc.7
  </details>

## 0.3.4-rc.6

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.6.0-rc.6
  - @rocket.chat/rest-typings@6.6.0-rc.6
  - @rocket.chat/models@0.0.28-rc.6
  </details>

## 0.3.4-rc.5

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.6.0-rc.5
  - @rocket.chat/rest-typings@6.6.0-rc.5
  - @rocket.chat/models@0.0.28-rc.5
  </details>

## 0.3.4-rc.4

### Patch Changes

- @rocket.chat/core-typings@6.6.0-rc.4
- @rocket.chat/rest-typings@6.6.0-rc.4
- @rocket.chat/models@0.0.28-rc.4

## 0.3.4-rc.3

### Patch Changes

- @rocket.chat/core-typings@6.6.0-rc.3
- @rocket.chat/rest-typings@6.6.0-rc.3
- @rocket.chat/models@0.0.28-rc.3

## 0.3.4-rc.2

### Patch Changes

- @rocket.chat/core-typings@6.6.0-rc.2
- @rocket.chat/rest-typings@6.6.0-rc.2
- @rocket.chat/models@0.0.28-rc.2

## 0.3.4-rc.1

### Patch Changes

- @rocket.chat/core-typings@6.6.0-rc.1
- @rocket.chat/rest-typings@6.6.0-rc.1
- @rocket.chat/models@0.0.28-rc.1

## 0.3.4-rc.0

### Patch Changes

- b223cbde14: feat(uikit): Move `@rocket.chat/ui-kit` package to the main monorepo
- dbb08ef948: feat: Implemented InlineCode handling in Bold, Italic and Strike
- 9a6e9b4e28: Fixed an issue that caused login buttons to not be reactively removed from the login page when the related authentication service was disabled by an admin.
- Updated dependencies [b223cbde14]
- Updated dependencies [dbb08ef948]
- Updated dependencies [748e57984d]
- Updated dependencies [7c6198f49f]
- Updated dependencies [fdd9852079]
- Updated dependencies [2260c04ec6]
- Updated dependencies [b4b2cd20a8]
  - @rocket.chat/ui-kit@0.33.0-rc.0
  - @rocket.chat/core-typings@6.6.0-rc.0
  - @rocket.chat/rest-typings@6.6.0-rc.0
  - @rocket.chat/models@0.0.28-rc.0

## 0.3.3

### Patch Changes

- @rocket.chat/core-typings@6.5.3
- @rocket.chat/rest-typings@6.5.3
- @rocket.chat/models@0.0.27

## 0.3.2

### Patch Changes

- @rocket.chat/core-typings@6.5.2
- @rocket.chat/rest-typings@6.5.2
- @rocket.chat/models@0.0.26

## 0.3.1

### Patch Changes

- Updated dependencies [c2b224fd82]
- Updated dependencies [c2b224fd82]
  - @rocket.chat/rest-typings@6.5.1
  - @rocket.chat/core-typings@6.5.1
  - @rocket.chat/models@0.0.25

## 0.3.0

### Minor Changes

- 5f81a0f3cb: Implemented the License library, it is used to handle the functionality like expiration date, modules, limits, etc.
  Also added a version v3 of the license, which contains an extended list of features.
  v2 is still supported, since we convert it to v3 on the fly.

### Patch Changes

- 5b9d6883bf: feat: Improve UI when MAC limits are reached
  feat: Limit endpoints on MAC limit reached
- Updated dependencies [dea1fe9191]
- Updated dependencies [c0ef13a0bf]
- Updated dependencies [5b9d6883bf]
- Updated dependencies [92613680b7]
- Updated dependencies [ec1b2b9846]
- Updated dependencies [a98f3ff303]
- Updated dependencies [5f81a0f3cb]
- Updated dependencies [dea1fe9191]
  - @rocket.chat/core-typings@6.5.0
  - @rocket.chat/rest-typings@6.5.0
  - @rocket.chat/models@0.0.24

## 0.3.0-rc.19

### Patch Changes

- @rocket.chat/core-typings@6.5.0-rc.19
- @rocket.chat/rest-typings@6.5.0-rc.19
- @rocket.chat/models@0.0.24-rc.12

## 0.3.0-rc.18

### Patch Changes

- @rocket.chat/core-typings@6.5.0-rc.18
- @rocket.chat/rest-typings@6.5.0-rc.18
- @rocket.chat/models@0.0.24-rc.11

## 0.3.0-rc.17

### Patch Changes

- @rocket.chat/core-typings@6.5.0-rc.17
- @rocket.chat/rest-typings@6.5.0-rc.17
- @rocket.chat/models@0.0.24-rc.10

## 0.3.0-rc.16

### Patch Changes

- @rocket.chat/core-typings@6.5.0-rc.16
- @rocket.chat/rest-typings@6.5.0-rc.16
- @rocket.chat/models@0.0.24-rc.9

## 0.3.0-rc.15

### Patch Changes

- @rocket.chat/core-typings@6.5.0-rc.15
- @rocket.chat/rest-typings@6.5.0-rc.15
- @rocket.chat/models@0.0.24-rc.8

## 0.3.0-rc.14

### Patch Changes

- @rocket.chat/core-typings@6.5.0-rc.14
- @rocket.chat/rest-typings@6.5.0-rc.14
- @rocket.chat/models@0.0.24-rc.7

## 0.3.0-rc.13

### Patch Changes

- @rocket.chat/core-typings@6.5.0-rc.13
- @rocket.chat/rest-typings@6.5.0-rc.13
- @rocket.chat/models@0.0.24-rc.6

## 0.3.0-rc.12

### Patch Changes

- @rocket.chat/core-typings@6.5.0-rc.12
- @rocket.chat/rest-typings@6.5.0-rc.12
- @rocket.chat/models@0.0.24-rc.5

## 0.3.0-rc.11

### Patch Changes

- @rocket.chat/core-typings@6.5.0-rc.11
- @rocket.chat/rest-typings@6.5.0-rc.11
- @rocket.chat/models@0.0.24-rc.4

## 0.3.0-rc.10

### Patch Changes

- @rocket.chat/core-typings@6.5.0-rc.10
- @rocket.chat/rest-typings@6.5.0-rc.10
- @rocket.chat/models@0.0.24-rc.3

## 0.3.0-rc.9

### Patch Changes

- @rocket.chat/core-typings@6.5.0-rc.9
- @rocket.chat/rest-typings@6.5.0-rc.9
- @rocket.chat/models@0.0.24-rc.2

## 0.3.0-rc.8

### Patch Changes

- @rocket.chat/core-typings@6.5.0-rc.8
- @rocket.chat/rest-typings@6.5.0-rc.8
- @rocket.chat/models@0.0.24-rc.1

## 0.3.0-rc.7

### Patch Changes

- @rocket.chat/core-typings@6.5.0-rc.7
- @rocket.chat/rest-typings@6.5.0-rc.7
- @rocket.chat/models@0.0.21-rc.7

## 0.3.0-rc.6

### Patch Changes

- @rocket.chat/core-typings@6.5.0-rc.6
- @rocket.chat/rest-typings@6.5.0-rc.6
- @rocket.chat/models@0.0.21-rc.6

## 0.3.0-rc.5

### Patch Changes

- @rocket.chat/core-typings@6.5.0-rc.5
- @rocket.chat/rest-typings@6.5.0-rc.5
- @rocket.chat/models@0.0.21-rc.5

## 0.3.0-rc.4

### Patch Changes

- @rocket.chat/core-typings@6.5.0-rc.4
- @rocket.chat/rest-typings@6.5.0-rc.4
- @rocket.chat/models@0.0.21-rc.4

## 0.3.0-rc.3

### Patch Changes

- @rocket.chat/core-typings@6.5.0-rc.3
- @rocket.chat/rest-typings@6.5.0-rc.3
- @rocket.chat/models@0.0.21-rc.3

## 0.3.0-rc.2

### Patch Changes

- @rocket.chat/core-typings@6.5.0-rc.2
- @rocket.chat/rest-typings@6.5.0-rc.2
- @rocket.chat/models@0.0.21-rc.2

## 0.3.0-rc.1

### Patch Changes

- @rocket.chat/core-typings@6.5.0-rc.1
- @rocket.chat/rest-typings@6.5.0-rc.1
- @rocket.chat/models@0.0.21-rc.1

## 0.3.0-rc.0

### Minor Changes

- 5f81a0f3cb: Implemented the License library, it is used to handle the functionality like expiration date, modules, limits, etc.
  Also added a version v3 of the license, which contains an extended list of features.
  v2 is still supported, since we convert it to v3 on the fly.

### Patch Changes

- 5b9d6883bf: feat: Improve UI when MAC limits are reached
  feat: Limit endpoints on MAC limit reached
- Updated dependencies [dea1fe9191]
- Updated dependencies [c0ef13a0bf]
- Updated dependencies [5b9d6883bf]
- Updated dependencies [92613680b7]
- Updated dependencies [ec1b2b9846]
- Updated dependencies [a98f3ff303]
- Updated dependencies [5f81a0f3cb]
- Updated dependencies [dea1fe9191]
  - @rocket.chat/core-typings@6.5.0-rc.0
  - @rocket.chat/rest-typings@6.5.0-rc.0
  - @rocket.chat/models@0.0.21-rc.0

## 0.2.8

### Patch Changes

- @rocket.chat/core-typings@6.4.8
- @rocket.chat/rest-typings@6.4.8
- @rocket.chat/models@0.0.23

## 0.2.7

### Patch Changes

- @rocket.chat/core-typings@6.4.7
- @rocket.chat/rest-typings@6.4.7
- @rocket.chat/models@0.0.22

## 0.2.6

### Patch Changes

- @rocket.chat/core-typings@6.4.6
- @rocket.chat/rest-typings@6.4.6
- @rocket.chat/models@0.0.21

## 0.2.5

### Patch Changes

- @rocket.chat/core-typings@6.4.5
- @rocket.chat/rest-typings@6.4.5
- @rocket.chat/models@0.0.20

## 0.2.4

### Patch Changes

- @rocket.chat/core-typings@6.4.4
- @rocket.chat/rest-typings@6.4.4
- @rocket.chat/models@0.0.19

## 0.2.3

### Patch Changes

- @rocket.chat/core-typings@6.4.3
- @rocket.chat/rest-typings@6.4.3
- @rocket.chat/models@0.0.18

## 0.2.2

### Patch Changes

- @rocket.chat/core-typings@6.4.2
- @rocket.chat/rest-typings@6.4.2
- @rocket.chat/models@0.0.17

## 0.2.1

### Patch Changes

- @rocket.chat/core-typings@6.4.1
- @rocket.chat/rest-typings@6.4.1
- @rocket.chat/models@0.0.16

## 0.2.0

### Minor Changes

- 982ef6f459: Add new event to notify users directly about new banners
- 19aec23cda: New AddUser workflow for Federated Rooms

### Patch Changes

- Updated dependencies [239a34e877]
- Updated dependencies [203304782f]
- Updated dependencies [4186eecf05]
- Updated dependencies [2db32f0d4a]
- Updated dependencies [ba24f3c21f]
- Updated dependencies [19aec23cda]
- Updated dependencies [ebab8c4dd8]
- Updated dependencies [357a3a50fa]
- Updated dependencies [1041d4d361]
- Updated dependencies [61128364d6]
- Updated dependencies [9496f1eb97]
- Updated dependencies [d45365436e]
- Updated dependencies [93d4912e17]
  - @rocket.chat/core-typings@6.4.0
  - @rocket.chat/rest-typings@6.4.0
  - @rocket.chat/models@0.0.15

## 0.2.0-rc.5

### Patch Changes

- Updated dependencies [1041d4d361]
  - @rocket.chat/core-typings@6.4.0-rc.5
  - @rocket.chat/rest-typings@6.4.0-rc.5
  - @rocket.chat/models@0.0.15-rc.5

## 0.2.0-rc.4

### Patch Changes

- @rocket.chat/core-typings@6.4.0-rc.4
- @rocket.chat/rest-typings@6.4.0-rc.4
- @rocket.chat/models@0.0.14-rc.4

## 0.2.0-rc.3

### Patch Changes

- @rocket.chat/core-typings@6.4.0-rc.3
- @rocket.chat/rest-typings@6.4.0-rc.3
- @rocket.chat/models@0.0.14-rc.3

## 0.2.0-rc.2

### Patch Changes

- @rocket.chat/core-typings@6.4.0-rc.2
- @rocket.chat/rest-typings@6.4.0-rc.2
- @rocket.chat/models@0.0.14-rc.2

## 0.2.0-rc.1

### Patch Changes

- @rocket.chat/core-typings@6.4.0-rc.1
- @rocket.chat/rest-typings@6.4.0-rc.1
- @rocket.chat/models@0.0.14-rc.1

## 0.2.0-rc.0

### Minor Changes

- 982ef6f459: Add new event to notify users directly about new banners
- 19aec23cda: New AddUser workflow for Federated Rooms

### Patch Changes

- Updated dependencies [239a34e877]
- Updated dependencies [203304782f]
- Updated dependencies [4186eecf05]
- Updated dependencies [2db32f0d4a]
- Updated dependencies [ba24f3c21f]
- Updated dependencies [19aec23cda]
- Updated dependencies [ebab8c4dd8]
- Updated dependencies [357a3a50fa]
- Updated dependencies [61128364d6]
- Updated dependencies [9496f1eb97]
- Updated dependencies [d45365436e]
- Updated dependencies [93d4912e17]
  - @rocket.chat/core-typings@6.4.0-rc.0
  - @rocket.chat/rest-typings@6.4.0-rc.0
  - @rocket.chat/models@0.0.11-rc.0

## 0.1.8

### Patch Changes

- @rocket.chat/core-typings@6.3.8
- @rocket.chat/rest-typings@6.3.8
- @rocket.chat/models@0.0.14

## 0.1.7

### Patch Changes

- @rocket.chat/core-typings@6.3.7
- @rocket.chat/rest-typings@6.3.7
- @rocket.chat/models@0.0.13

## 0.1.6

### Patch Changes

- @rocket.chat/core-typings@6.3.6
- @rocket.chat/rest-typings@6.3.6
- @rocket.chat/models@0.0.12

## 0.1.5

### Patch Changes

- @rocket.chat/models@0.0.11
- @rocket.chat/core-typings@6.3.5
- @rocket.chat/rest-typings@6.3.5

## 0.1.4

### Patch Changes

- @rocket.chat/models@0.0.10
- @rocket.chat/core-typings@6.3.4
- @rocket.chat/rest-typings@6.3.4

## 0.1.3

### Patch Changes

- @rocket.chat/core-typings@6.3.3
- @rocket.chat/rest-typings@6.3.3
- @rocket.chat/models@0.0.9

## 0.1.2

### Patch Changes

- @rocket.chat/core-typings@6.3.2
- @rocket.chat/rest-typings@6.3.2
- @rocket.chat/models@0.0.8

## 0.1.1

### Patch Changes

- @rocket.chat/core-typings@6.3.1
- @rocket.chat/rest-typings@6.3.1
- @rocket.chat/models@0.0.7

## 0.1.0

### Minor Changes

- 5e429d9c78: feat: Add setting to synchronize LDAP info on OAuth logins
- f379336951: Add new event to notify users directly about new banners
- 48ac55f4ea: Created new endpoints for creating users in bulk

### Patch Changes

- 9da856cc67: fix: Resume on-hold chat not working with max-chat's allowed per agent config
- Updated dependencies [e14ec50816]
- Updated dependencies [74aa677088]
- Updated dependencies [e006013e5f]
- Updated dependencies [e846d873b7]
- Updated dependencies [eecd9fc99a]
- Updated dependencies [6a474ff952]
- Updated dependencies [9da856cc67]
- Updated dependencies [f76d514341]
- Updated dependencies [12d97e16c2]
- Updated dependencies [0645f42e12]
- Updated dependencies [48ac55f4ea]
  - @rocket.chat/core-typings@6.3.0
  - @rocket.chat/rest-typings@6.3.0
  - @rocket.chat/models@0.0.6

## 0.1.0-rc.10

### Minor Changes

- f379336951: Add new event to notify users directly about new banners

### Patch Changes

- @rocket.chat/core-typings@6.3.0-rc.10
- @rocket.chat/rest-typings@6.3.0-rc.10
- @rocket.chat/models@0.0.6-rc.10

## 0.1.0-rc.9

### Minor Changes

- 48ac55f4ea: Created new endpoints for creating users in bulk

### Patch Changes

- Updated dependencies [48ac55f4ea]
  - @rocket.chat/core-typings@6.3.0-rc.9
  - @rocket.chat/rest-typings@6.3.0-rc.9
  - @rocket.chat/models@0.0.6-rc.9

## 0.1.0-rc.8

### Patch Changes

- @rocket.chat/core-typings@6.3.0-rc.8
- @rocket.chat/rest-typings@6.3.0-rc.8
- @rocket.chat/models@0.0.6-rc.8

## 0.1.0-rc.7

### Patch Changes

- @rocket.chat/core-typings@6.3.0-rc.7
- @rocket.chat/rest-typings@6.3.0-rc.7
- @rocket.chat/models@0.0.6-rc.7

## 0.1.0-rc.6

### Patch Changes

- @rocket.chat/core-typings@6.3.0-rc.6
- @rocket.chat/rest-typings@6.3.0-rc.6
- @rocket.chat/models@0.0.6-rc.6

## 0.1.0-rc.5

### Patch Changes

- @rocket.chat/core-typings@6.3.0-rc.5
- @rocket.chat/rest-typings@6.3.0-rc.5
- @rocket.chat/models@0.0.6-rc.5

## 0.1.0-rc.4

### Patch Changes

- @rocket.chat/core-typings@6.3.0-rc.4
- @rocket.chat/rest-typings@6.3.0-rc.4
- @rocket.chat/models@0.0.6-rc.4

## 0.1.0-rc.3

### Patch Changes

- @rocket.chat/core-typings@6.3.0-rc.3
- @rocket.chat/rest-typings@6.3.0-rc.3
- @rocket.chat/models@0.0.6-rc.3

## 0.1.0-rc.2

### Patch Changes

- Updated dependencies [f76d514341]
  - @rocket.chat/rest-typings@6.3.0-rc.2
  - @rocket.chat/core-typings@6.3.0-rc.2
  - @rocket.chat/models@0.0.6-rc.2

## 0.1.0-rc.1

### Patch Changes

- @rocket.chat/core-typings@6.3.0-rc.1
- @rocket.chat/rest-typings@6.3.0-rc.1
- @rocket.chat/models@0.0.6-rc.1

## 0.1.0-rc.0

### Minor Changes

- 5e429d9c78: feat: Add setting to synchronize LDAP info on OAuth logins

## 0.0.5

### Patch Changes

- @rocket.chat/core-typings@6.2.10
- @rocket.chat/rest-typings@6.2.10
- @rocket.chat/models@0.0.5

## 0.0.4

### Patch Changes

- 9da856cc67: fix: Resume on-hold chat not working with max-chat's allowed per agent config
- Updated dependencies [e14ec50816]
- Updated dependencies [74aa677088]
- Updated dependencies [e006013e5f]
- Updated dependencies [e846d873b7]
- Updated dependencies [eecd9fc99a]
- Updated dependencies [6a474ff952]
- Updated dependencies [9da856cc67]
- Updated dependencies [12d97e16c2]
- Updated dependencies [0645f42e12]
  - @rocket.chat/core-typings@6.3.0-rc.0
  - @rocket.chat/rest-typings@6.3.0-rc.0
  - @rocket.chat/models@0.0.3-rc.0

## 0.0.2

### Patch Changes

- Updated dependencies []:
  - @rocket.chat/core-typings@6.2.6
  - @rocket.chat/rest-typings@6.2.6
  - @rocket.chat/models@0.0.2
