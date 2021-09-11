## S1.E1

# How to speed up your website 2.5x times by using responsive images

## Tips & Tricks

Instead of using the regular `<img src="{url}" />` tag, also specify a set of variants using the `srcset` attribute so that the browser can pick the correct version based on the device type and screen size.

```
<img
    src="/images/woman.png"
    sizes="100vw"
    srcset="
        /images/woman-640w.png 640w,
        /images/woman-750w.png 750w,
        /images/woman-828w.png 828w,
        /images/woman-1080w.png 1080w,
        /images/woman-1200w.png 1200w,
        /images/woman-2048w.png 2048w,
        /images/woman-3840w.png 3840w"
    />
```

Pretty straight forward. It's a little bit of work to prepare upfront all the image variants, but as you can see in the Results, the `2.5x speed increase` is worth it.

[See code](https://github.com/andreibarabas/achieving-100ms/compare/S01.E01-before...S01.E01-after)

# Benchmarks

| Before optimization                                                                                                                                 | After optimization                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Demo](https://achieving-100ms-git-s01e01-before-andreibarabas.vercel.app)                                                                          | [Demo](https://achieving-100ms-git-s01e01-after-andreibarabas.vercel.app)                                                                          |
| Time to Interactive: `4.2s`                                                                                                                         | Time to Interactive: `1.5s (~2.8x speed increase)`                                                                                                 |
| ![Before](results/before.png)                                                                                                                       | ![After](results/after.png)                                                                                                                        |
| [See more](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fachieving-100ms-git-s01e01-before-andreibarabas.vercel.app%2F) | [See more](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fachieving-100ms-git-s01e01-after-andreibarabas.vercel.app%2F) |
