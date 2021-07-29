const pluginRE = /^(@zoos-mp\/|zoos-mp-|@[\w-]+\/zoos-mp-)plugin-/;
const scopeRE = /^@[\w-]+\//;
const officialRE = /^@zoos-mp\//;

exports.isPlugin = (id) => pluginRE.test(id);

exports.isOfficialPlugin = (id) => exports.isPlugin(id) && officialRE.test(id);

exports.toShortPluginId = (id) => id.replace(pluginRE, "");

exports.resolvePluginId = (id) => {
  // already full id
  // e.g. zoos-mp-plugin-foo, @zoos-mp/plugin-foo, @bar/zoos-mp-plugin-foo
  if (pluginRE.test(id)) {
    return id;
  }
  // scoped short
  // e.g. @zoos-mp/foo, @bar/foo
  if (id.charAt(0) === "@") {
    const scopeMatch = id.match(scopeRE);
    if (scopeMatch) {
      const scope = scopeMatch[0];
      const shortId = id.replace(scopeRE, "");
      return `${scope}${scope === "@zoos-mp/" ? `` : `zoos-mp-`}plugin-${shortId}`;
    }
  }
  // default short
  // e.g. foo
  return `zoos-mp-plugin-${id}`;
};

exports.matchesPluginId = (input, full) => {
  const short = full.replace(pluginRE, "");
  return (
    // input is full
    full === input ||
    // input is short without scope
    short === input ||
    // input is short with scope
    short === input.replace(scopeRE, "")
  );
};
