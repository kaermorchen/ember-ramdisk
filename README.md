# ember-ramdisk

Work in progress

## Getting Started

Install [imDisk](http://www.ltr-data.se/opencode.html/#ImDisk).

Install in ember-cli application.

```
ember install ember-ramdisk
```

## How it work

When you start `ember server`, ember-ramdisk will create the virtual driver `X:` and symlink `tmp` -> `X:/tmp` 
