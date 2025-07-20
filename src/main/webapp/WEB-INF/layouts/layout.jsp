<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title><tiles:getAsString name="title" /></title>
</head>
<body>
    <tiles:insertAttribute name="header" />
    <tiles:insertAttribute name="body" />
    <tiles:insertAttribute name="footer" />

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
    <script>
        flatpickr("#checkInOutDate", {
            mode: "range",
            dateFormat: "d-m-Y",
            minDate: "today"
        });
    </script>
    <script src="/js/ushma/jquery-3.1.0.min.js"></script>
    <script src="/js/ushma/vegas.min.js"></script>
    <script src="/js/ushma/script.js"></script>
    <script src="/js/earthkraft/user.js"></script>
</body>
</html>
