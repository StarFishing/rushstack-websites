---
hide_title: true
custom_edit_url: null
pagination_prev: null
pagination_next: null
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/api-extractor](./api-extractor.md) &gt; [ExtractorMessageCategory](./api-extractor.extractormessagecategory.md)

## ExtractorMessageCategory enum

Specifies a category of messages for use with [ExtractorMessage](./api-extractor.extractormessage.md) .

<b>Signature:</b>

```typescript
export declare const enum ExtractorMessageCategory 
```

## Enumeration Members

|  Member | Value | Description |
|  --- | --- | --- |
|  Compiler | <code>&quot;Compiler&quot;</code> | Messages originating from the TypeScript compiler. |
|  Console | <code>&quot;console&quot;</code> | Console messages communicate the progress of the overall operation. They may include newlines to ensure nice formatting. They are output in real time, and cannot be routed to the API Report file. |
|  Extractor | <code>&quot;Extractor&quot;</code> | Messages related to API Extractor's analysis. |
|  TSDoc | <code>&quot;TSDoc&quot;</code> | Messages related to parsing of TSDoc comments. |
