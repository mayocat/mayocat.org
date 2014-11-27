Ideas for new templating system
===============================

    public interface ThemeTemplateResolver

        Optional<Path> resolveTemplate(String name)
        Optional<Path> resolveTemplate(String name, Breakpoint breakpoint)
        Optional<Path> resolveTemplate(String name, String model)
        Optional<Path> resolveTemplate(String name, String model, Breakpoint breakpoint)


    public interface TemplateRenderer

        void render(Path template, Map<String, Object> data, OutputStream outputStream)
        String renderAsString(Path template, Map<String, Object> data)