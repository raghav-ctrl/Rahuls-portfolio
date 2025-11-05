import * as React from 'react';

const SvgSectionFlower = ({
    title,
    titleId,
    ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="none"
        viewBox="0 0 25 29"
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <path fill="url(#section-flower_svg__a)" d="M25 0H0v28.929h25z" />
        <defs>
            <pattern
                id="section-flower_svg__a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <use
                    xlinkHref="#section-flower_svg__b"
                    transform="matrix(.00255 0 0 .0022 -.01 0)"
                />
            </pattern>
            <image
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAHFCAYAAADc/K+IAAAAAXNSR0IArs4c6QAAIABJREFUeF7sfQmcHFXxf1XPzIZAgE0QvABBUOTwgoAQ8Fh2+vVkQwznoiggiIqieKECikQ88EJ/iDeKJwoLgpC4mfd6wijHBjCAKCoif1BURIVkE0Li7sx0/T8PJhiSPbpn+njdXe/zyYeP7ntV3/rWm67ud1QhcGMGOmEAAYA6GchjUs0A+z3V7gsbvJ4O3JgBZoAZYAaYgcAMcAAJTBkPYAaYAWaAGdAMcADhecAMMAPMADPQEQMcQDqijQdljQFe2s+aR9meOBjgABIHy6yDGWAGmIEMMsABJINOZZOYAWaAGYiDAQ4gcbDMOpgBZoAZyCADHEAy6FQ2Kd0M8H5Muv2XNPo45w8HkKS9zfqZAWaAGUgpAxxAUuo4hs0MMAPMwJMMxPnJsRnlHEB4DjIDzEAHDCT41OoALQ+JhgEOINHwylKZAWaAGYiWAQNieOIBxAAOonUyS2cGmAFmIKMMJB5AzOSVw5qZfkknKp5N6fQbo56eAQ4g03PEPXLMgJRyGwCYUygUSpvQUETEJ5rN5qjjOE/kmB42PTMMdPaawwEkMxOADemUgWq1+lzLsg4EgP0AYE9E3JOI9tSBAwBmTCO3AQD/BIC/AMCDRHQ/It5pWdYd5XL5X51i4nHMQBoYSFEA6SxCpsEJjDFeBur1+nPGx8cHENEBgEMAYJeIEPwNAJYTUZWI3EqlsioiPSw2Bgb4CbQlySkKIDHMEFaRWQZqtdqzPc97MwC8EQD2T6CUQQsAbgCAH46NjV2zcOHC9Zklmw3LDQMcQHLj6nwaqpQSAPBuAJgPAEUTWEDEx4noMiK6yHEc/ZXCjRlIJQMcQFLpNgY9FQNEhEqpRYh4LgDovQ1Tm94/+XGhUDivv7//H6aCZFzMwGQMcADhuZFyBp65Mu267q4A8H0i6kuRYeuJ6AutVuvCgYGBsRThzg5U3uDoyJccQDqijQeZyICUciEi/ggAtjcRnw9Md3meN1ipVO73uze7dRwAAAJfSURBVCdHGQaYgY0McADhidAVBpRSXQjfZK0VK1aUVq9e/QIAzApTWMbl4Ntu6qBSak1Ut0YrJVpV/XKr5uwFGd0Yj4q+bXme95lKpaLrw3NjBgIzwAEkMGXZDqjX6wJgOQD86OgprxNhy+70cNvQHwHAcQOF/h4AuOnqzZu2p7Y0C42NfQMA3nX0jKd3vH7LeXc3zF4vED7hjI+Pf7JcLv+3nWbdx+78a0pNcIhECql6gCw77BJOvj9NwHgO0dPOXpWtQ4cPTs+OjY9z1vned6VlUrll2m3hfHHywAHkHj5zrQ2KeUuiHguAOytiYBh4Y7xysKdJdDpQXsBtEOhWPxAqVS6P+hY7s8MxMkAB5A42c6wLqXUAQDwRgB4DQA8N8OmTmaargVzt2VZN1cqld+l2E6Gn1IGOICk1HHGwJ5s2aJerz+n0WjopakjAWAnY8DGD+RRRLwRAG5wHOfO+NWzRmZgawY4gPCsCM5Ahk+1BgCwEQCu9jzv+5VKZU2AsdyVGQiNAQ4goVGZbUGhLVtkGxZRxwxMZsAf6cY/8XkhjM8AAAAASUVORK5CYII="
                id="section-flower_svg__b"
                width={400}
                height={453}
            />
        </defs>
    </svg>
);
export default SvgSectionFlower;

